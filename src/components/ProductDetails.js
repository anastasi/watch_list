import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loading from "./Loading";

const SingleProduct = styled.div`
  flex: 1;
  background-color: #f3f0f0;
  padding: 1rem 2rem;
  h1 {
    font-size: 14px;
    line-height: 20.8px;
    letter-spacing: 3.2px;
    text-transform: uppercase;
    font-family: DWFutura, sans-serif;
    font-weight: normal;
    margin-bottom: 2rem;
    text-align: center;
  }
  img {
    display: block;
    margin: 0 auto;
    width: 20rem;
  }
  p {
    border-bottom: 1px solid #8080802b;
    padding-bottom: 0.8rem;
  }
  p,
  span {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.15px;
    font-family: DWFutura, sans-serif;
    font-weight: normal;
  }
  span {
    padding-right: 1.5rem;
  }
`;

const ProductDetails = ({ selectedProduct, isLoadingImage }) => {
  return (
    <SingleProduct>
      {selectedProduct.name && <h1>{selectedProduct.name}</h1>}
      {isLoadingImage ? (
        <Loading />
      ) : (
        selectedProduct.image && (
          <img src={selectedProduct.image} alt={selectedProduct.name} />
        )
      )}
      {selectedProduct.description && (
        <div>
          <p>{selectedProduct.description}</p>
        </div>
      )}
      {selectedProduct.price && (
        <span>
          Price: {selectedProduct.price} {selectedProduct.currency}
        </span>
      )}
      {selectedProduct.size && <span>Size: {selectedProduct.size}</span>}
      {selectedProduct.color && <span>Color: {selectedProduct.color}</span>}
    </SingleProduct>
  );
};

ProductDetails.propTypes = {
  selectedProduct: PropTypes.object.isRequired,
  isLoadingImage: PropTypes.bool.isRequired
};

export default ProductDetails;
