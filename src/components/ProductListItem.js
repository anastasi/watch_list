import React, { Fragment } from "react";
import styled from "styled-components";

const ProductList = styled.div`
  h1 {
    font-size: 16px;
    line-height: 20.8px;
    letter-spacing: 3.2px;
    text-transform: uppercase;
    font-family: DWFutura, sans-serif;
    font-weight: normal;
    padding: 1rem 0;
    span {
      font-size: 16px;
      line-height: 20.8px;
      letter-spacing: 3.2px;
      text-transform: uppercase;
      font-family: DWFutura, sans-serif;
      font-weight: normal;
    }
    .active {
      background-color: #80808017;
      margin: 0;
    }
  }
`;
const Hr = styled.div`
  border-bottom: 1px solid #8080802b;
  width: 25rem;
`;
const activeBlock = {
  backgroundColor: "#80808017",
  margin: 0
};

const ProductListItem = ({ product, onClick }) => {
  return (
    <Fragment>
      <ProductList key={product.key} product={product} onClick={onClick}>
        <h1>
          {product.name} <span>{product.price}</span>
        </h1>
      </ProductList>
      <Hr />
    </Fragment>
  );
};
export default ProductListItem;
