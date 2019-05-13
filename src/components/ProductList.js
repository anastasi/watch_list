import React, { Component, Fragment } from "react";
import ProductListItem from "./ProductListItem";
import ProductDetails from "./ProductDetails";

class ProductList extends Component {
  state = {
    products: [],
    selectedProduct: ""
  };
  handleOnClick = id => {
    const selectedProduct = this.state.products.find(item => item.id === id);
    this.setState({
      selectedProduct
    });
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
        }
      });

      products.push({ ...product });
      this.setState({
        products
      });
    });
    console.log(api);
  }

  render() {
    return (
      <Fragment>
        <div>
          {this.state.products.map(product => (
            <ProductListItem
              product={product}
              key={product.id}
              onClick={this.handleOnClick.bind(this, product.id)}
            />
          ))}
        </div>
        <ProductDetails selectedProduct={this.state.selectedProduct} />
      </Fragment>
    );
  }
}

export default ProductList;
