import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import withWidth, { isWidthUp, isWidthDown } from "@material-ui/core/withWidth";
import { inject, observer } from "mobx-react";
import track from "lib/tracking/track";
import Breadcrumbs from "custom/iclick/components/Breadcrumbs";
import ProductDetailAddToCart from "custom/iclick/components/ProductDetailAddToCart";
import ProductDetailTitle from "custom/iclick/components/ProductDetailTitle";
import VariantList from "custom/iclick/components/VariantList";
import ProductDetailVendor from "custom/iclick/components/ProductDetailVendor";
import ProductDetailDescription from "custom/iclick/components/ProductDetailDescription";
import ProductDetailPrice from "custom/iclick/components/ProductDetailPrice";
import MediaGallery from "custom/iclick/components/MediaGallery";
import { Router } from "routes";
import priceByCurrencyCode from "lib/utils/priceByCurrencyCode";
import variantById from "lib/utils/variantById";
import trackProduct from "lib/tracking/trackProduct";
import TRACKING from "lib/tracking/constants";
import trackCartItems from "lib/tracking/trackCartItems";

import ProductCarouselTab from "custom/iclick/components/ProductCarouselTab";
import ProductDetailContainer from "custom/iclick/components/ProductDetailContainer"
import ProductDetailSidebar from "custom/iclick/components/ProductDetailSidebar"
import ProductDetailFooter from "custom/iclick/components/ProductDetailFooter"
import ProductDetailGallery from "custom/iclick/components/ProductDetailGallery"

import $ from "jquery";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const { CART_VIEWED, PRODUCT_ADDED, PRODUCT_VIEWED } = TRACKING;

/**
 * Product detail component
 * @name ProductDetail
 * @param {Object} props Component props
 * @returns {React.Component} React component node that represents a product detail view
 */
@withWidth({ initialWidth: "md" })
@inject("routingStore", "uiStore")
@track()
@observer
class ProductDetail extends Component {
  static propTypes = {
    /**
     * Function to add items to a cart.
     * Implementation may be provided by addItemsToCart function from the @withCart decorator
     *
     * @example addItemsToCart(CartItemInput)
     * @type Function
     */
    addItemsToCart: PropTypes.func,
    currencyCode: PropTypes.string.isRequired,
    product: PropTypes.object,
    routingStore: PropTypes.object.isRequired,
    shop: PropTypes.object.isRequired,
    theme: PropTypes.object,
    uiStore: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
  }

  componentDidMount() {
    const { product } = this.props;

    // Select first variant by default
    this.selectVariant(product.variants[0]);

    if (process.browser) {
      window.$ = $;
      window.jQuery = $;
      this.hasLoaded();
    }
  }

  hasLoaded = () => {
    this.setState({ isLoaded: true });
  }


  selectVariant(variant, optionId) {
    const { product, uiStore } = this.props;

    // Select the variant, and if it has options, the first option
    const variantId = variant._id;
    let selectOptionId = optionId;
    if (!selectOptionId && variant.options && variant.options.length) {
      selectOptionId = variant.options[0]._id;
    }

    this.trackAction({ variant, optionId, action: PRODUCT_VIEWED });

    uiStore.setPDPSelectedVariantId(variantId, selectOptionId);

    Router.pushRoute(
      "product",
      {
        slugOrId: product.slug,
        variantId: selectOptionId || variantId
      },
      { replace: true }
    );
  }

  @trackProduct()
  trackAction() {}

  @trackCartItems()
  trackCartItems() {}

  /**
   * @name handleSelectVariant
   * @summary Called when a variant is selected in the variant list
   * @private
   * @ignore
   * @param {Object} variant The variant object that was selected
   * @returns {undefined} No return
   */
  handleSelectVariant = (variant) => {
    this.selectVariant(variant);
  }

  /**
   * @name handleAddToCartClick
   * @summary Called when the add to cart button is clicked
   * @private
   * @ignore
   * @param {Number} quantity - A positive integer from 0 to infinity, representing the quantity to add to cart
   * @returns {undefined} No return
   */
  handleAddToCartClick = async (quantity) => {
    const {
      addItemsToCart,
      currencyCode,
      product,
      uiStore: { openCartWithTimeout, pdpSelectedOptionId, pdpSelectedVariantId },
      width
    } = this.props;

    // Get selected variant or variant option
    const selectedVariant = variantById(product.variants, pdpSelectedVariantId);
    const selectedOption = variantById(selectedVariant.options, pdpSelectedOptionId);
    const selectedVariantOrOption = selectedOption || selectedVariant;

    if (selectedVariantOrOption) {
      // Get the price for the currently selected variant or variant option
      const price = priceByCurrencyCode(currencyCode, selectedVariantOrOption.pricing);

      // Call addItemsToCart with an object matching the GraphQL `CartItemInput` schema
      const { data } = await addItemsToCart([
        {
          price: {
            amount: price.price,
            currencyCode
          },
          productConfiguration: {
            productId: product.productId, // Pass the productId, not to be confused with _id
            productVariantId: selectedVariantOrOption.variantId // Pass the variantId, not to be confused with _id
          },
          quantity
        }
      ]);

      // If no errors occurred, track action
      if (data) {
        // The response data will be in either `createCart` or `addCartItems` prop
        // depending on the type of user, either authenticated or anonymous.
        const { cart } = data.createCart || data.addCartItems;
        const { edges: items } = cart.items;

        this.trackAction({
          variant: {
            ...selectedVariant,
            cart_id: cart._id, // eslint-disable-line camelcase
            quantity
          },
          optionId: selectedOption ? selectedOption._id : null,
          action: PRODUCT_ADDED
        });

        // The mini cart popper will open automatically after adding an item to the cart,
        // therefore, a CART_VIEWED event is published.
        // debugger // eslint-disable-line
        this.trackCartItems({ cartItems: items, cartId: cart._id, action: CART_VIEWED }); // eslint-disable-line camelcase
      }
    }
    if (isWidthUp("md", width)) {
      // Open the cart, and close after a 3 second delay
      openCartWithTimeout(3000);
    }
  }

  /**
   * @name handleSelectOption
   * @summary Called when an option is selected in the option list
   * @private
   * @ignore
   * @param {Object} option The option object that was selected
   * @returns {undefined} No return
   */
  handleSelectOption = (option) => {
    const { product, uiStore } = this.props;

    // If we are clicking an option, it must be for the current selected variant
    const variant = product.variants.find((vnt) => vnt._id === uiStore.pdpSelectedVariantId);

    this.selectVariant(variant, option._id);
  }

  /**
   * @name determineProductPrice
   * @description Determines a product's price given the shop's currency code. It will
   * use the selected option if available, otherwise it will use the selected variant.
   * @returns {Object} An pricing object
   */
  determineProductPrice() {
    const { currencyCode, product } = this.props;
    const { pdpSelectedVariantId, pdpSelectedOptionId } = this.props.uiStore;
    const selectedVariant = variantById(product.variants, pdpSelectedVariantId);
    let productPrice = {};

    if (pdpSelectedOptionId && selectedVariant) {
      const selectedOption = variantById(selectedVariant.options, pdpSelectedOptionId);
      productPrice = priceByCurrencyCode(currencyCode, selectedOption.pricing);
    } else if (!pdpSelectedOptionId && selectedVariant) {
      productPrice = priceByCurrencyCode(currencyCode, selectedVariant.pricing);
    }

    return productPrice;
  }

  render() {
    const {
      currencyCode,
      product,
      routingStore,
      uiStore: { pdpSelectedOptionId, pdpSelectedVariantId },
      width
    } = this.props;

    // Set the default media as the top-level product's media
    // (all media on all variants and objects)
    let pdpMediaItems = product.media;

    // If we have a selected variant (we always should)
    // check to see if media is available, and use this media instead
    // Revert to original media if variant doesn't have specific media
    const selectedVariant = product.variants.find((variant) => variant._id === pdpSelectedVariantId);
    if (selectedVariant) {
      if (selectedVariant.media && selectedVariant.media.length) {
        pdpMediaItems = selectedVariant.media;
      }

      // If we have a selected option, do the same check
      // Will revert to variant check if no option media is available
      if (Array.isArray(selectedVariant.options) && selectedVariant.options.length) {
        const selectedOption = selectedVariant.options.find((option) => option._id === pdpSelectedOptionId);
        if (selectedOption) {
          if (selectedOption.media && selectedOption.media.length) {
            pdpMediaItems = selectedOption.media;
          }
        }
      }
    }

    const productPrice = this.determineProductPrice();
    const compareAtDisplayPrice = (productPrice.compareAtPrice && productPrice.compareAtPrice.displayAmount) || null;

    // Phone size
    if (isWidthDown("sm", width)) {
      return (
        <Fragment>
          <div>
            <ProductDetailTitle pageTitle={product.pageTitle} title={product.title} />
            <div>
              <ProductDetailVendor>{product.vendor}</ProductDetailVendor>
            </div>
            <div>
              <ProductDetailPrice compareAtPrice={compareAtDisplayPrice} isCompact price={productPrice.displayPrice} />
            </div>
          </div>

          <div>
            <MediaGallery mediaItems={pdpMediaItems} />
          </div>

          <div>
            <VariantList
              onSelectOption={this.handleSelectOption}
              onSelectVariant={this.handleSelectVariant}
              product={product}
              selectedOptionId={pdpSelectedOptionId}
              selectedVariantId={pdpSelectedVariantId}
              currencyCode={currencyCode}
              variants={product.variants}
            />
            <ProductDetailAddToCart
              onClick={this.handleAddToCartClick}
              selectedOptionId={pdpSelectedOptionId}
              selectedVariantId={pdpSelectedVariantId}
              variants={product.variants}
            />
          </div>

          <div>
            <ProductDetailDescription>{product.description}</ProductDetailDescription>
          </div>
        </Fragment>
      );
    }

    return (
      <Fragment>  
        <ProductDetailContainer>
          <Grid item xs={12}>
            <Breadcrumbs isPDP tagId={routingStore.tagId} product={product} />
          </Grid>
          <ProductDetailTitle pageTitle={product.pageTitle} title={product.title} />
            <div className="row">
              <div className="col-lg-9">
                <div className="product-single-container product-single-default">
                  <div className="row">
                    <ProductDetailGallery/>
                    
                    <div className="col-lg-5 col-md-6">
                      <div className="product-single-details">
                        <h1 className="product-title">{product.title}</h1>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span className="ratings" style={{width: '60%'}} />
                          </div>
                          <a href="#" className="rating-link">( 6 Reviews )</a>
                        </div>
                        <div className="price-box">
                          <span className="old-price">{compareAtDisplayPrice}</span>
                          <span className="product-price">{productPrice.displayPrice}</span>
                        </div>
                        <div className="product-desc">
                          <p>{product.description}</p>
                        </div>
                        <div className="product-filters-container">
                          <div className="product-single-filter">
                            <label>Colors:</label>
                            <ul className="config-swatch-list">
                              <li className="active">
                                <a href="#" style={{backgroundColor: '#6085a5'}} />
                              </li>
                              <li>
                                <a href="#" style={{backgroundColor: '#ab6e6e'}} />
                              </li>
                              <li>
                                <a href="#" style={{backgroundColor: '#b19970'}} />
                              </li>
                              <li>
                                <a href="#" style={{backgroundColor: '#11426b'}} />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-action product-all-icons">
                          <div className="product-single-qty">
                            <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected"><span className="input-group-btn input-group-prepend"><button className="btn btn-outline btn-down-icon bootstrap-touchspin-down" type="button" /></span><input className="horizontal-quantity form-control" type="text" /><span className="input-group-btn input-group-append"><button className="btn btn-outline btn-up-icon bootstrap-touchspin-up" type="button" /></span></div>
                            <a href="cart.html" className="paction add-cart" title="Add to Cart">
                              <span>Add to Cart</span>
                            </a>
                            <a href="#" className="paction add-wishlist" title="Add to Wishlist">
                              <span>Add to Wishlist</span>
                            </a>
                            <a href="#" className="paction add-compare" title="Add to Compare">
                              <span>Add to Compare</span>
                            </a>
                          </div>
                          <div className="product-single-share">
                            <label>Share:</label>
                            {/* www.addthis.com share plugin*/}
                            <div className="addthis_inline_share_toolbox" />
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                  <ProductDetailFooter/>
                </div>
              </div>
              <ProductDetailSidebar/>
            </div>
          <ProductCarouselTab title="Featured Products" style={{ borderBottom: "none" }} />
        </ProductDetailContainer>
        {/* <Grid container>
            <Grid item xs={12} sm={6}> 
        </Grid> 
        <Grid item xs={12}>
          <Breadcrumbs isPDP tagId={routingStore.tagId} product={product} />
        </Grid>
          
        <Grid item xs={12} sm={6}>
          <div>
            <MediaGallery mediaItems={pdpMediaItems} />
          </div>
          <ProductDetailTitle pageTitle={product.pageTitle} title={product.title} />
          <div>
            <ProductDetailVendor>{product.vendor}</ProductDetailVendor>
          </div>
          <div>
            <ProductDetailPrice compareAtPrice={compareAtDisplayPrice} price={productPrice.displayPrice} />
          </div>
          <div>
            <ProductDetailDescription>{product.description}</ProductDetailDescription>
          </div>
          <VariantList
            onSelectOption={this.handleSelectOption}
            onSelectVariant={this.handleSelectVariant}
            product={product}
            selectedOptionId={pdpSelectedOptionId}
            selectedVariantId={pdpSelectedVariantId}
            currencyCode={currencyCode}
            variants={product.variants}
          /> 
            <ProductDetailAddToCart
            onClick={this.handleAddToCartClick}
            selectedOptionId={pdpSelectedOptionId}
            selectedVariantId={pdpSelectedVariantId}
            variants={product.variants}
          /> 
        </Grid> 
        </Grid> */}
      
      </Fragment>
    );
  }
}

export default ProductDetail;
