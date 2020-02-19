import React from "react";
import PropTypes from "prop-types";
import MyCarousel from "custom/iclick/components/MyCarousel";
import ProductItem from "custom/iclick/components/ProductItem";
import withCatalogFeaturedItems from "containers/catalog/withCatalogFeaturedItems";

@withCatalogFeaturedItems
class ProductCarouselTab extends React.Component {
  render() {
    const { title, style, catalogItems: products = [] } = this.props;
    //console.log(this.props);
    return (
      <div className="home-product-tabs">
        <div className="container">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="featured-products-tab"
                data-toggle="tab"
                href="#featured-products"
                role="tab"
                aria-controls="featured-products"
                aria-selected="true"
              >
                {title}
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content" style={style}>
          <div
            className="tab-pane fade show active"
            id="featured-products"
            role="tabpanel"
            aria-labelledby="featured-products-tab"
          >
            <div className="container">
              <MyCarousel className="tab-products-carousel owl-theme" loop items={5} margin={30}>
                {products.map(({ node: { product } = {} }) =>
                  <ProductItem
                    productName={product.title}
                    imagePath={product.primaryImage.URLs.medium}
                    price={product.pricing[0].displayPrice}
                    isOnSale={product.isOnSale}
                    productUrl={`/product/${product.slug}`}
                    product={product}
                  />)}

              </MyCarousel>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

ProductCarouselTab.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string.isRequired
};

export default ProductCarouselTab;
