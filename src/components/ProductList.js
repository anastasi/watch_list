import React, { Component, Fragment } from 'react'

class ProductList extends Component {
    state={
        products:[
            {id:1, name:"Product 1", price: 2322},
            {id:2, name:"Product 2", price: 10092},
            {id:3, name:"Product 3", price: 32200}
        ]
    }
  render() {
    return (
      <Fragment>
        <ul>
            {
                this.state.products.map(prod => <li key={prod.id}>{prod.name}: {prod.price}</li>)
            }
        </ul>
      </Fragment>
    )
  }
}

export default ProductList
