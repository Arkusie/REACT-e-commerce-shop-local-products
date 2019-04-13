import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";

import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <>
        <div id="background-div" className="py-5">
          <div className="container">
            <Title name="Local " title="Farmer" />
            <h5>
              <br />
              <strong className="text-color px-20">
                Get All Your Local Products Fresh and Fast With Few Simple Clicks,
                Providing High Reliability And Excellent Service To Our Clients. Lowest
                Possible Price!
              </strong>
            </h5>
            <div className="row">
              <ProductConsumer>
                {value => {
                  console.log(value.products);
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}
