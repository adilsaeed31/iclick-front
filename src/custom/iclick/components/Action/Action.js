import React from "react";
import Link from "custom/iclick/components/Link";

const ProductAction = (props) => {
  const handleAddToCart = async (el) => {
    el.preventDefault();
    // const { data } = await addItemsToCart([
    //   {
    //     price: {
    //       amount: price.price,
    //       currencyCode: props.shop.currency.code
    //     },
    //     productConfiguration: {
    //       productId: product.productId, // Pass the productId, not to be confused with _id
    //       productVariantId: selectedVariantOrOption.variantId // Pass the variantId, not to be confused with _id
    //     },
    //     quantity: 1
    //   }
    // ]);
  };

  return (
    <div className="product-action">
      {/* <Link to="#" className="paction add-wishlist" title="Add to Wishlist">
        <span>Add to Wishlist</span>
      </Link> */}
      <button className="paction add-cart" title="Add to Cart" onClick={handleAddToCart}>
        <span>Add to Cart</span>
      </button>
      {/* <a href="#" className="paction add-compare" title="Add to Compare">
        <span>Add to Compare</span>
      </a> */}
    </div>
  );
};
export default ProductAction;
