import React, { Fragment, useState, useEffect } from "react";
import ProductListItem from "./ProductListItem";
import ProductDetails from "./ProductDetails";
import { fetchProducts } from "../api/fetchProducts";
import Loading from "./Loading";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 0 15rem 3rem;
  min-height: 60vh;
`;
const List = styled.div`
  flex: 2;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const productsEffect = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        setIsError(true);
      }
      setIsLoadingProducts(false);
    };
    productsEffect();
  }, []);

  const handleOnClick = async id => {
    const singleProduct = products.find(item => item.id === id);
    const imageId = singleProduct.imageId;
    async function fetchImageApi() {
      const responseImage = await fetch(
        `https://dev-api.danielwellington.com/frontend/assets/${imageId}`
      );
      const json = await responseImage.json();
      const image = json.data.uri;
      return image;
    }
    singleProduct.image = await fetchImageApi();

    setSelectedProduct(singleProduct);
    setIsLoadingImage(false);
  };

  const isEmpty = obj => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  return (
    <Container>
      {isLoadingProducts ? (
        <Loading />
      ) : (
        <Fragment>
          {isError ? (
            <p>Something went wrong...</p>
          ) : (
            <List>
              {products.map(product => (
                <ProductListItem
                  product={product}
                  key={product.id}
                  onClick={() => handleOnClick(product.id)}
                  selected={product.id === selectedProduct.id}
                />
              ))}
            </List>
          )}
        </Fragment>
      )}
      {!isEmpty(selectedProduct) && (
        <ProductDetails
          selectedProduct={selectedProduct}
          isLoadingImage={isLoadingImage}
        />
      )}
    </Container>
  );
};

export default ProductList;
