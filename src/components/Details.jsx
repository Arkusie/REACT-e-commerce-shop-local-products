import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, company, img, info, price, title, inCart, promotion } = value.detailProduct;
          return (
            <div className="container py-6">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-color my-4">
                  <h1 className="text-title">
                    {title}: {company}
                  </h1>
                </div>
              </div>

              {/* info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 position-relative">
                  <img src={img} className="img-fluid" alt="product" />

                  {promotion ? (
                    <div className="promotion-container">
                      <i className="fas fa-percent fa-7x" />
                      <h3 className="text-title">
                        {" "}
                        <br />
                        Looks
                        <br /> like a<br /> promo!
                      </h3>
                    </div>
                  ) : null}
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <h3>{title}</h3>
                  {/* <h6 className="text-title my-3">made by:{company}</h6> */}
                  <h4 className="">price: ${price}</h4>
                  <p className="text-capitalize font-weight-bold mt-3 "> Details about "{company}"</p>
                  <p className="text-justify text-color">{info}</p>

                  {/* buttons */}
                  <div className="d-flex justify-content-between">
                    <Link to="/">
                      <ButtonContainer>
                        <i className="far fa-hand-point-left mx-2" />
                        to products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? (
                        "in Cart"
                      ) : (
                        <>
                          <i className="fas fa-cart-arrow-down" /> add
                        </>
                      )}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
