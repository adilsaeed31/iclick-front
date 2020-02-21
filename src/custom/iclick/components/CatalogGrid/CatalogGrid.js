import React, { Component } from "react";
import ProductItem from "custom/iclick/components/ProductItem";

class CatalogGrid extends Component {
  componentDidMount() { }

  render() {
    const { products } = this.props;
    return (
      <div className="row row-sm">
        {products.map((product) => (
          < div className="col-6 col-md-4 col-xl-3" key={product._id} >
            <ProductItem
              productName={product.title}
              imagePath={product.primaryImage.URLs.medium}
              price={product.pricing[0].minPrice}
              isOnSale={product.isOnSale}
              productUrl={`/product/${product.slug}`}
              product={product}
            />
          </div >
        ))}
      </div>
    );
  }
}

export default CatalogGrid;
