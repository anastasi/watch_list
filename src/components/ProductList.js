import React, { Component, Fragment } from "react";

class ProductList extends Component {
  state = {
    products: [],
    selectedProduct: ""
  };
  handleOnClick = id => {
    const selectedProduct = this.state.products.find(item => item.id === id);
    // console.log(selectedProduct);
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

      products.push({...product});
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
          {this.state.products.map(prod => (
            <div key={prod.id} onClick={() => this.handleOnClick(prod.id)}>
              {prod.name}: {prod.price}
            </div>
          ))}
        </div>

        <div>{this.state.selectedProduct.name}</div>
      </Fragment>
    );
  }
}

export default ProductList;
