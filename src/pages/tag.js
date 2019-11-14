import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import Helmet from "react-helmet";
import withCatalogItems from "containers/catalog/withCatalogItems";
import withTag from "containers/tags/withTag";
import Breadcrumbs from "custom/iclick/components/Breadcrumbs";
import ProductGrid from "custom/iclick/components/ProductGrid";
import ProductGridEmptyMessage from "custom/iclick/components/ProductGrid/ProductGridEmptyMessage";
import ProductGridHero from "custom/iclick/components/ProductGridHero";
import ProductGridTitle from "custom/iclick/components/ProductGridTitle";
import SharedPropTypes from "lib/utils/SharedPropTypes";
import trackProductListViewed from "lib/tracking/trackProductListViewed";

@withTag
@withCatalogItems
@inject("routingStore", "uiStore")
@observer
export default class TagGridPage extends Component {
  static propTypes = {
    catalogItems: PropTypes.array.isRequired,
    catalogItemsPageInfo: PropTypes.object,
    initialGridSize: PropTypes.object,
    isLoadingCatalogItems: PropTypes.bool,
    routingStore: PropTypes.shape({
      query: PropTypes.shape({
        limit: PropTypes.string,
        sortby: PropTypes.string
      }),
      setSearch: PropTypes.func.isRequired,
      tag: SharedPropTypes.tag
    }),
    shop: PropTypes.shape({
      currency: PropTypes.shape({
        code: PropTypes.string.isRequired
      }),
      description: PropTypes.string
    }),
    tag: SharedPropTypes.tag,
    uiStore: PropTypes.shape({
      pageSize: PropTypes.number.isRequired,
      setPageSize: PropTypes.func.isRequired,
      setSortBy: PropTypes.func.isRequired,
      sortBy: PropTypes.string.isRequired
    })
  }

  static getDerivedStateFromProps(props) {
    const { routingStore, tag } = props;
    if (tag && routingStore.tagId !== tag._id) {
      routingStore.setTagId(tag._id);
      routingStore.setSearch({
        before: null,
        after: null
      });
    }

    return null;
  }

  static async getInitialProps({ req }) {
    // It is not perfect, but the only way we can guess at the screen width of the
    // requesting device is to parse the `user-agent` header it sends.
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    const width = (userAgent && userAgent.indexOf("Mobi")) > -1 ? 320 : 1024;

    return { initialGridSize: { width } };
  }

  state = {}

  componentDidUpdate(prevProps) {
    if (this.props.catalogItems !== prevProps.catalogItems) {
      this.trackEvent(this.props);
    }
  }

  @trackProductListViewed()
  trackEvent() {}

  setPageSize = (pageSize) => {
    this.props.routingStore.setSearch({ limit: pageSize });
    this.props.uiStore.setPageSize(pageSize);
  }

  setSortBy = (sortBy) => {
    this.props.routingStore.setSearch({ sortby: sortBy });
    this.props.uiStore.setSortBy(sortBy);
  }

  renderHeaderMetatags(metafields) {
    const { shop } = this.props;

    const metatags = [];
    let hasDescription = false;
    metafields.forEach((field) => {
      if (field.namespace && field.namespace === "metatag") {
        const metatag = {
          content: field.value
        };
        metatag[field.scope] = field.key;
        metatags.push(metatag);
        if (field.key === "description") {
          hasDescription = true;
        }
      }
    });
    if (hasDescription === false) {
      metatags.push({ name: "description", content: shop && shop.description });
    }
    return metatags;
  }

  render() {
    console.log("routingStore.tagId",routingStore?  routingStore.tagId : this.props);
    const {
      catalogItems,
      catalogItemsPageInfo,
      initialGridSize,
      isLoadingCatalogItems,
      routingStore,
      shop,
      tag,
      uiStore
    } = this.props;
    const pageSize =
      routingStore.query && routingStore.query.limit ? parseInt(routingStore.query.limit, 10) : uiStore.pageSize;
    const sortBy = routingStore.query && routingStore.query.sortby ? routingStore.query.sortby : uiStore.sortBy;

    if (!tag) {
      return <ProductGridEmptyMessage actionMessage="Go Home" resetLink="/" />;
    }

    return (
      <Fragment>
         <Helmet
          title={`${tag && tag.name} | ${shop && shop.name}`}
          meta={
            tag && tag.metafields && tag.metafields.length > 0
              ? this.renderHeaderMetatags(tag.metafields)
              : [{ name: "description", content: shop && shop.description }]
          }
        />
        <Breadcrumbs isTagGrid tagId={routingStore.tagId} />
        <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="banner banner-cat mb-3" style={{backgroundImage: 'url("static/images/banners/banner-fashion.jpg")'}}>
              <div className="banner-content container offset-1">
                <h2 className="banner-subtitle">check out over <span>200+</span></h2>
                <h1 className="banner-title">
                  Coasts &amp; Jackets For Woman
                </h1>
                <a href="#" className="btn btn-primary">Shop Now</a>
              </div>
            </div>
            <nav className="toolbox">
              <div className="toolbox-left">
                <div className="toolbox-item toolbox-sort">
                  <label>Sort By:</label>
                  <div className="select-custom">
                    <select name="orderby" className="form-control">
                      <option value="menu_order" selected="selected">Default sorting</option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date">Sort by newness</option>
                      <option value="price">Sort by price: low to high</option>
                      <option value="price-desc">Sort by price: high to low</option>
                    </select>
                  </div>
                  <a href="#" className="sorter-btn" title="Set Ascending Direction"><span className="sr-only">Set Ascending Direction</span></a>
                </div>
              </div>
              <div className="toolbox-item toolbox-show">
                <label>Show:</label>
                <div className="select-custom">
                  <select name="count" className="form-control">
                    <option value={9}>9 Products</option>
                    <option value={18}>18 Products</option>
                    <option value={27}>27 Products</option>
                  </select>
                </div>
              </div>
              <div className="layout-modes">
                <a href="category.html" className="layout-btn btn-grid active" title="Grid">
                  <i className="icon-mode-grid" />
                </a>
                <a href="category-list.html" className="layout-btn btn-list" title="List">
                  <i className="icon-mode-list" />
                </a>
              </div>
            </nav>
            <div className="row row-sm">
              <div className="col-6 col-md-4 col-xl-3">
                <div className="product">
                  <figure className="product-image-container">
                    <a href="product.html" className="product-image">
                      <img src="/static/images/products/product-1.jpg" alt="product" />
                    </a>
                    <a href="ajax/product-quick-view.html" className="btn-quickview">Quick View</a>
                  </figure>
                  <div className="product-details">
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '80%'}} />
                      </div>
                    </div>
                    <h2 className="product-title">
                      <a href="product.html">Brown Watch</a>
                    </h2>
                    <div className="price-box">
                      <span className="product-price">$28.00</span>
                    </div>
                    <div className="product-action">
                      <a href="#" className="paction add-wishlist" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                      </a>
                      <a href="product.html" className="paction add-cart" title="Add to Cart">
                        <span>Add to Cart</span>
                      </a>
                      <a href="#" className="paction add-compare" title="Add to Compare">
                        <span>Add to Compare</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-xl-3">
                <div className="product">
                  <figure className="product-image-container">
                    <a href="product.html" className="product-image">
                      <img src="/static/images/products/product-2.jpg" alt="product" />
                    </a>
                    <a href="ajax/product-quick-view.html" className="btn-quickview">Quick View</a>
                    <span className="product-label label-sale">-20%</span>
                    <span className="product-label label-hot">New</span>
                  </figure>
                  <div className="product-details">
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                      </div>
                    </div>
                    <h2 className="product-title">
                      <a href="product.html">Black Watch</a>
                    </h2>
                    <div className="price-box">
                      <span className="old-price">$60.00</span>
                      <span className="product-price">$48.00</span>
                    </div>
                    <div className="product-action">
                      <a href="#" className="paction add-wishlist" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                      </a>
                      <a href="product.html" className="paction add-cart" title="Add to Cart">
                        <span>Add to Cart</span>
                      </a>
                      <a href="#" className="paction add-compare" title="Add to Compare">
                        <span>Add to Compare</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-xl-3">
                <div className="product">
                  <figure className="product-image-container">
                    <a href="product.html" className="product-image">
                      <img src="/static/images/products/product-3.jpg" alt="product" />
                    </a>
                    <a href="ajax/product-quick-view.html" className="btn-quickview">Quick View</a>
                  </figure>
                  <div className="product-details">
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '60%'}} />
                      </div>
                    </div>
                    <h2 className="product-title">
                      <a href="product.html">Optical Mouse</a>
                    </h2>
                    <div className="price-box">
                      <span className="product-price">$850.00</span>
                    </div>
                    <div className="product-action">
                      <a href="#" className="paction add-wishlist" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                      </a>
                      <a href="product.html" className="paction add-cart" title="Add to Cart">
                        <span>Add to Cart</span>
                      </a>
                      <a href="#" className="paction add-compare" title="Add to Compare">
                        <span>Add to Compare</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-xl-3">
                <div className="product">
                  <figure className="product-image-container">
                    <a href="product.html" className="product-image">
                      <img src="/static/images/products/product-4.jpg" alt="product" />
                    </a>
                    <a href="ajax/product-quick-view.html" className="btn-quickview">Quick View</a>
                  </figure>
                  <div className="product-details">
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '40%'}} />
                      </div>
                    </div>
                    <h2 className="product-title">
                      <a href="product.html">Phillips</a>
                    </h2>
                    <div className="price-box">
                      <span className="product-price">$299.00</span>
                    </div>
                    <div className="product-action">
                      <a href="#" className="paction add-wishlist" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                      </a>
                      <a href="product.html" className="paction add-cart" title="Add to Cart">
                        <span>Add to Cart</span>
                      </a>
                      <a href="#" className="paction add-compare" title="Add to Compare">
                        <span>Add to Compare</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-xl-3">
                <div className="product">
                  <figure className="product-image-container">
                    <a href="product.html" className="product-image">
                      <img src="/static/images/products/product-5.jpg" alt="product" />
                    </a>
                    <a href="ajax/product-quick-view.html" className="btn-quickview">Quick View</a>
                  </figure>
                  <div className="product-details">
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '50%'}} />
                      </div>
                    </div>
                    <h2 className="product-title">
                      <a href="product.html">Skullcanddy</a>
                    </h2>
                    <div className="price-box">
                      <span className="product-price">$79.00</span>
                    </div>
                    <div className="product-action">
                      <a href="#" className="paction add-wishlist" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                      </a>
                      <a href="product.html" className="paction add-cart" title="Add to Cart">
                        <span>Add to Cart</span>
                      </a>
                      <a href="#" className="paction add-compare" title="Add to Compare">
                        <span>Add to Compare</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-xl-3">
                <div className="product">
                  <figure className="product-image-container">
                    <a href="product.html" className="product-image">
                      <img src="/static/images/products/product-6.jpg" alt="product" />
                    </a>
                    <a href="ajax/product-quick-view.html" className="btn-quickview">Quick View</a>
                    <span className="product-label label-hot">Hot</span>
                  </figure>
                  <div className="product-details">
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '40%'}} />
                      </div>
                    </div>
                    <h2 className="product-title">
                      <a href="product.html">Mic Stereo</a>
                    </h2>
                    <div className="price-box">
                      <span className="product-price">$19.00</span>
                    </div>
                    <div className="product-action">
                      <a href="#" className="paction add-wishlist" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                      </a>
                      <a href="product.html" className="paction add-cart" title="Add to Cart">
                        <span>Add to Cart</span>
                      </a>
                      <a href="#" className="paction add-compare" title="Add to Compare">
                        <span>Add to Compare</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-xl-3">
                <div className="product">
                  <figure className="product-image-container">
                    <a href="product.html" className="product-image">
                      <img src="/static/images/products/product-7.jpg" alt="product" />
                    </a>
                    <a href="ajax/product-quick-view.html" className="btn-quickview">Quick View</a>
                    <span className="product-label label-hot">Hot</span>
                  </figure>
                  <div className="product-details">
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '100%'}} />
                      </div>
                    </div>
                    <h2 className="product-title">
                      <a href="product.html">Mobile Phone</a>
                    </h2>
                    <div className="price-box">
                      <span className="product-price">$299.00</span>
                    </div>
                    <div className="product-action">
                      <a href="#" className="paction add-wishlist" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                      </a>
                      <a href="product.html" className="paction add-cart" title="Add to Cart">
                        <span>Add to Cart</span>
                      </a>
                      <a href="#" className="paction add-compare" title="Add to Compare">
                        <span>Add to Compare</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-xl-3">
                <div className="product">
                  <figure className="product-image-container">
                    <a href="product.html" className="product-image">
                      <img src="/static/images/products/product-8.jpg" alt="product" />
                    </a>
                    <a href="ajax/product-quick-view.html" className="btn-quickview">Quick View</a>
                  </figure>
                  <div className="product-details">
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                      </div>
                    </div>
                    <h2 className="product-title">
                      <a href="product.html">G632 Headset</a>
                    </h2>
                    <div className="price-box">
                      <span className="product-price">$299.00</span>
                    </div>
                    <div className="product-action">
                      <a href="#" className="paction add-wishlist" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                      </a>
                      <a href="product.html" className="paction add-cart" title="Add to Cart">
                        <span>Add to Cart</span>
                      </a>
                      <a href="#" className="paction add-compare" title="Add to Compare">
                        <span>Add to Compare</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-xl-3">
                <div className="product">
                  <figure className="product-image-container">
                    <a href="product.html" className="product-image">
                      <img src="/static/images/products/product-9.jpg" alt="product" />
                    </a>
                    <a href="ajax/product-quick-view.html" className="btn-quickview">Quick View</a>
                  </figure>
                  <div className="product-details">
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '70%'}} />
                      </div>
                    </div>
                    <h2 className="product-title">
                      <a href="product.html">Bluetooth Headset</a>
                    </h2>
                    <div className="price-box">
                      <span className="product-price">$59.00</span>
                    </div>
                    <div className="product-action">
                      <a href="#" className="paction add-wishlist" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                      </a>
                      <a href="product.html" className="paction add-cart" title="Add to Cart">
                        <span>Add to Cart</span>
                      </a>
                      <a href="#" className="paction add-compare" title="Add to Compare">
                        <span>Add to Compare</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-xl-3">
                <div className="product">
                  <figure className="product-image-container">
                    <a href="product.html" className="product-image">
                      <img src="/static/images/products/product-10.jpg" alt="product" />
                    </a>
                    <a href="ajax/product-quick-view.html" className="btn-quickview">Quick View</a>
                  </figure>
                  <div className="product-details">
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '40%'}} />
                      </div>
                    </div>
                    <h2 className="product-title">
                      <a href="product.html">Wireless Headset</a>
                    </h2>
                    <div className="price-box">
                      <span className="product-price">$63.00</span>
                    </div>
                    <div className="product-action">
                      <a href="#" className="paction add-wishlist" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                      </a>
                      <a href="product.html" className="paction add-cart" title="Add to Cart">
                        <span>Add to Cart</span>
                      </a>
                      <a href="#" className="paction add-compare" title="Add to Compare">
                        <span>Add to Compare</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-xl-3">
                <div className="product">
                  <figure className="product-image-container">
                    <a href="product.html" className="product-image">
                      <img src="/static/images/products/product-11.jpg" alt="product" />
                    </a>
                    <a href="ajax/product-quick-view.html" className="btn-quickview">Quick View</a>
                  </figure>
                  <div className="product-details">
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '40%'}} />
                      </div>
                    </div>
                    <h2 className="product-title">
                      <a href="product.html">Noise CT</a>
                    </h2>
                    <div className="price-box">
                      <span className="product-price">$13.99</span>
                    </div>
                    <div className="product-action">
                      <a href="#" className="paction add-wishlist" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                      </a>
                      <a href="product.html" className="paction add-cart" title="Add to Cart">
                        <span>Add to Cart</span>
                      </a>
                      <a href="#" className="paction add-compare" title="Add to Compare">
                        <span>Add to Compare</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-xl-3">
                <div className="product">
                  <figure className="product-image-container">
                    <a href="product.html" className="product-image">
                      <img src="/static/images/products/product-12.jpg" alt="product" />
                    </a>
                    <a href="ajax/product-quick-view.html" className="btn-quickview">Quick View</a>
                    <span className="product-label label-hot">Hot</span>
                  </figure>
                  <div className="product-details">
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{width: '0%'}} />
                      </div>
                    </div>
                    <h2 className="product-title">
                      <a href="product.html">Drone Toy</a>
                    </h2>
                    <div className="price-box">
                      <span className="product-price">$4.99</span>
                    </div>
                    <div className="product-action">
                      <a href="#" className="paction add-wishlist" title="Add to Wishlist">
                        <span>Add to Wishlist</span>
                      </a>
                      <a href="product.html" className="paction add-cart" title="Add to Cart">
                        <span>Add to Cart</span>
                      </a>
                      <a href="#" className="paction add-compare" title="Add to Compare">
                        <span>Add to Compare</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav className="toolbox toolbox-pagination">
              <div className="toolbox-item toolbox-show">
                <label>Show:</label>
                <div className="select-custom">
                  <select name="count" className="form-control">
                    <option value={9}>9 Products</option>
                    <option value={18}>18 Products</option>
                    <option value={27}>27 Products</option>
                  </select>
                </div>
              </div>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link page-link-btn" href="#"><i className="icon-angle-left" /></a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                </li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item"><span className="page-link">...</span></li>
                <li className="page-item">
                  <a className="page-link page-link-btn" href="#"><i className="icon-angle-right" /></a>
                </li>
              </ul>
            </nav>
          </div>
          <aside className="sidebar-shop col-lg-3 order-lg-first">
            <div className="sidebar-wrapper">
              <div className="widget">
                <h3 className="widget-title">
                  <a data-toggle="collapse" href="#widget-body-1" role="button" aria-expanded="true" aria-controls="widget-body-1">Fashion</a>
                </h3>
                <div className="collapse show" id="widget-body-1">
                  <div className="widget-body">
                    <ul className="cat-list">
                      <li><a href="#">Women</a></li>
                      <li><a href="#">Men</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="widget">
                <h3 className="widget-title">
                  <a data-toggle="collapse" href="#widget-body-2" role="button" aria-expanded="true" aria-controls="widget-body-2">Price</a>
                </h3>
                <div className="collapse show" id="widget-body-2">
                  <div className="widget-body">
                    <form action="#">
                      <div className="price-slider-wrapper">
                        <div id="price-slider" />
                      </div>
                      <div className="filter-price-action">
                        <button type="submit" className="btn btn-dark">Filter</button>
                        <div className="filter-price-text">
                          <span id="filter-price-range" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="widget">
                <h3 className="widget-title">
                  <a data-toggle="collapse" href="#widget-body-3" role="button" aria-expanded="true" aria-controls="widget-body-3">Size</a>
                </h3>
                <div className="collapse show" id="widget-body-3">
                  <div className="widget-body">
                    <ul className="config-size-list">
                      <li className="active"><a href="#">S</a></li>
                      <li><a href="#">M</a></li>
                      <li><a href="#">L</a></li>
                      <li><a href="#">XL</a></li>
                      <li><a href="#">2XL</a></li>
                      <li><a href="#">3XL</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="widget">
                <h3 className="widget-title">
                  <a data-toggle="collapse" href="#widget-body-4" role="button" aria-expanded="true" aria-controls="widget-body-4">Brand</a>
                </h3>
                <div className="collapse show" id="widget-body-4">
                  <div className="widget-body">
                    <ul className="cat-list">
                      <li><a href="#">Adidas <span>18</span></a></li>
                      <li><a href="#">Camel <span>22</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="widget">
                <h3 className="widget-title">
                  <a data-toggle="collapse" href="#widget-body-6" role="button" aria-expanded="true" aria-controls="widget-body-6">Color</a>
                </h3>
                <div className="collapse show" id="widget-body-6">
                  <div className="widget-body">
                    <ul className="config-swatch-list">
                      <li>
                        <a href="#" style={{backgroundColor: '#4090d5'}} />
                      </li>
                      <li className="active">
                        <a href="#" style={{backgroundColor: '#f5494a'}} />
                      </li>
                      <li>
                        <a href="#" style={{backgroundColor: '#fca309'}} />
                      </li>
                      <li>
                        <a href="#" style={{backgroundColor: '#11426b'}} />
                      </li>
                      <li>
                        <a href="#" style={{backgroundColor: '#f0f0f0'}} />
                      </li>
                      <li>
                        <a href="#" style={{backgroundColor: '#3fd5c9'}} />
                      </li>
                      <li>
                        <a href="#" style={{backgroundColor: '#979c1c'}} />
                      </li>
                      <li>
                        <a href="#" style={{backgroundColor: '#7d5a3c'}} />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="widget widget-featured">
                <h3 className="widget-title">Featured Proucts</h3>
                <div className="widget-body">
                  <div className="owl-carousel widget-featured-products">
                    <div className="featured-col">
                      <div className="product product-sm">
                        <figure className="product-image-container">
                          <a href="product.html" className="product-image">
                            <img src="/static/images/products/small/product-1.jpg" alt="product" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Ring</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '80%'}} />
                            </div>
                          </div>
                          <div className="price-box">
                            <span className="product-price">$45.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="product product-sm">
                        <figure className="product-image-container">
                          <a href="product.html" className="product-image">
                            <img src="/static/images/products/small/product-2.jpg" alt="product" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Headphone</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '20%'}} />
                            </div>
                          </div>
                          <div className="price-box">
                            <span className="old-price">$60.00</span>
                            <span className="product-price">$45.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="product product-sm">
                        <figure className="product-image-container">
                          <a href="product.html" className="product-image">
                            <img src="/static/images/products/small/product-3.jpg" alt="product" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Shoes</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '100%'}} />
                            </div>
                          </div>
                          <div className="price-box">
                            <span className="product-price">$50.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="featured-col">
                      <div className="product product-sm">
                        <figure className="product-image-container">
                          <a href="product.html" className="product-image">
                            <img src="/static/images/products/small/product-4.jpg" alt="product" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Watch-Black</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '100%'}} />
                            </div>
                          </div>
                          <div className="price-box">
                            <span className="old-price">$50.00</span>
                            <span className="product-price">$35.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="product product-sm">
                        <figure className="product-image-container">
                          <a href="product.html" className="product-image">
                            <img src="/static/images/products/small/product-5.jpg" alt="product" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Watch-Gray</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '60%'}} />
                            </div>
                          </div>
                          <div className="price-box">
                            <span className="product-price">$29.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="product product-sm">
                        <figure className="product-image-container">
                          <a href="product.html" className="product-image">
                            <img src="/static/images/products/small/product-6.jpg" alt="product" />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h2 className="product-title">
                            <a href="product.html">Hat</a>
                          </h2>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span className="ratings" style={{width: '20%'}} />
                            </div>
                          </div>
                          <div className="price-box">
                            <span className="product-price">$40.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget widget-block">
                <h3 className="widget-title">Custom HTML Block</h3>
                <h5>This is a custom sub-title.</h5>
                <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi. </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <ProductGridHero tag={tag} />
         <ProductGrid
          catalogItems={catalogItems}
          currencyCode={shop.currency.code}
          initialSize={initialGridSize}
          isLoadingCatalogItems={isLoadingCatalogItems}
          pageInfo={catalogItemsPageInfo}
          pageSize={pageSize}
          setPageSize={this.setPageSize}
          setSortBy={this.setSortBy}
          sortBy={sortBy}
        />
         </Fragment>
      // <Fragment>
      //   <Helmet
      //     title={`${tag && tag.name} | ${shop && shop.name}`}
      //     meta={
      //       tag && tag.metafields && tag.metafields.length > 0
      //         ? this.renderHeaderMetatags(tag.metafields)
      //         : [{ name: "description", content: shop && shop.description }]
      //     }
      //   />
      //   {console.log("routingStore.tagId",routingStore.tagId)}
      //   <Breadcrumbs isTagGrid tagId={routingStore.tagId} />
      //   {tag && tag.displayTitle && <ProductGridTitle displayTitle={tag.displayTitle} />}
      //   <ProductGridHero tag={tag} />
      //   <ProductGrid
      //     catalogItems={catalogItems}
      //     currencyCode={shop.currency.code}
      //     initialSize={initialGridSize}
      //     isLoadingCatalogItems={isLoadingCatalogItems}
      //     pageInfo={catalogItemsPageInfo}
      //     pageSize={pageSize}
      //     setPageSize={this.setPageSize}
      //     setSortBy={this.setSortBy}
      //     sortBy={sortBy}
      //   />
      // </Fragment>
    );
  }
}
