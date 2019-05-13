import React from "react";

const ProductListItem = ({ product, onClick }) => {
  return (
    <div key={product.key} product={product} onClick={onClick}>
      {product.name}: {product.price}
    </div>
  );
};
export default ProductListItem;
