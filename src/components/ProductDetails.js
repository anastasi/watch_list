import React from "react";
import styled from "styled-components";

const SingleProduct = styled.div`
  flex: 1;
  h1 {
    font-size: 16px;
    line-height: 20.8px;
    letter-spacing: 3.2px;
    text-transform: uppercase;
    font-family: DWFutura, sans-serif;
    font-weight: normal;
    margin-bottom: 2rem;
  }
  img {
    display: block;
    margin: 0 auto;
    width: 100px;
  }
  p {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.15px;
    font-family: DWFutura, sans-serif;
    font-weight: normal;
  }
`;

const ProductDetails = ({ selectedProduct }) => {
  return (
    <SingleProduct>
      {selectedProduct.name && <h1>{selectedProduct.name}</h1>}
      {selectedProduct.image && <img src={selectedProduct.image} />}
      {selectedProduct.description && <p>{selectedProduct.description}</p>}
      {selectedProduct.price && <span>Price: {selectedProduct.price}</span>}
      {selectedProduct.size && <span>Size: {selectedProduct.size}</span>}
      {selectedProduct.color && <span>Color: {selectedProduct.color}</span>}
    </SingleProduct>
  );
};

export default ProductDetails;
