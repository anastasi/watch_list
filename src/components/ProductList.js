import React, { Component } from "react";
import ProductListItem from "./ProductListItem";
import ProductDetails from "./ProductDetails";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 10rem 15rem;
`;
const List = styled.div`
  flex: 2;
`;

class ProductList extends Component {
  state = {
    products: [],
    selectedProduct: ""
  };
  

  async componentDidMount() {
    let products = [];
    const response = await fetch(
      `https://dev-api.danielwellington.com/frontend/products`
    );
    const json = await response.json();
    const api = json.data.map(async item => {
      const productResponse = await fetch(
        `https://dev-api.danielwellington.com/frontend/products/${item.id}`
      );
      const singleProduct = await productResponse.json();
      let product = { id: singleProduct.data.id };

      singleProduct.data.elements.map(item => {
        if (item.name === "name") {
          product.name = item.value;
        }
        if (item.name === "price") {
          product.price = item.value.value;
          product.current = item.value.unitAbbreviation;
        }
        if (item.name === "description") {
          product.description = item.value;
        }
        if (item.name === "size") {
          product.size = item.value;
        }
        if (item.name === "color") {
          product.color = item.value;
        }
        if (item.name === "main_image") {
          product.imageId = item.value.id;
        }
      });

      products.push(product);
      this.setState({
        products
      });
    });
    console.log(api);
  }

  handleOnClick = async id => {
    const selectedProduct = this.state.products.find(item => item.id === id);
    const imageId = selectedProduct.imageId;
    async function fetchImageApi() {
      const responseImage = await fetch(
        `https://dev-api.danielwellington.com/frontend/assets/${imageId}`
      );
      const json = await responseImage.json();
      const image = json.data.uri;
      return image;
    }
    selectedProduct.image = await fetchImageApi();

    this.setState({
      selectedProduct
    });
  };

  render() {
    return (
      <Container>
        <List>
          {this.state.products.map(product => (
            <ProductListItem
              product={product}
              key={product.id}
              onClick={this.handleOnClick.bind(this, product.id)}
            />
          ))}
        </List>
        <ProductDetails selectedProduct={this.state.selectedProduct} />
      </Container>
    );
  }
}

export default ProductList;
