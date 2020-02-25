import React, { Component } from "react";
import ProductItem from "custom/iclick/components/ProductItem";

class CatalogGrid extends Component {
  componentDidMount() { }

  render() {
    const { products, layout } = this.props;
    return (
      <div className="row row-sm">
        {products.map((product) => (
          < div className={layout === "list" ? "col-12" : "col-6 col-md-4 col-xl-3"} key={product._id} >
            <ProductItem
              productName={product.title}
              imagePath={product.primaryImage.URLs.medium}
              price={product.pricing[0].minPrice}
              isOnSale={product.isOnSale}
              productUrl={`/product/${product.slug}`}
              product={product}
              layout={layout}
              description={product.description
                .replace(/<[^>]*>/g, "")
                .replace(/&nbsp;/g, "")
                .substr(0, 250)
                .concat("...")}
            />
          </div >
        ))}
      </div>
    );
  }
}

export default CatalogGrid;
