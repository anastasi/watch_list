import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ProductList = styled.div`
  h1 {
    font-size: 14px;
    line-height: 20.8px;
    letter-spacing: 3.2px;
    text-transform: uppercase;
    font-family: DWFutura, sans-serif;
    font-weight: normal;
    padding: 1rem 0;
    margin: 0;
    border-bottom: 1px solid #8080802b;
    width: 25rem;
    &:hover {
      cursor: pointer;
    }
    span {
      font-size: 16px;
      line-height: 20.8px;
      letter-spacing: 3.2px;
      text-transform: uppercase;
      font-family: DWFutura, sans-serif;
      font-weight: normal;
    }
  }
  .selected {
    color: gray;
  }
  @media (max-width: 1199px){
    h1{
      margin: 0 auto;
      text-align: center;
    }
  }
`;

const ProductListItem = ({ product, onClick, selected }) => {
  return (
    <Fragment>
      <ProductList key={product.key} product={product} onClick={onClick}>
        <h1 className={selected ? "selected" : null}>
          {product.name} <span>{product.price} {product.currency}</span>
        </h1>
      </ProductList>
    </Fragment>
  );
};

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
};

export default ProductListItem;
