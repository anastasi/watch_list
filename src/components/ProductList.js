import React, { useState, useEffect } from "react";
import ProductListItem from "./ProductListItem";
import ProductDetails from "./ProductDetails";
import { fetchProducts } from "../api/fetchProducts";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 0 15rem 3rem;
`;
const List = styled.div`
  flex: 2;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  useEffect(() => {
    const productsEffect = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
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

  const isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

  return (
    <Container>
      {isLoadingProducts ? (
        <p>Loading...</p>
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
