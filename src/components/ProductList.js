import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import{ storeProducts } from '../data';

export default class ProductList extends Component {
  state = {
    products: []
  }

  render() {

    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="my" title="products" />

            <div className="row">
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
