import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart, company, promotion } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                <Link to="/details">
                  {promotion ? (
                    <div className="promotion-container promotion-animation mx-auto">
                      <h5 className="text-title "> - % - </h5>
                    </div>
                  ) : null}
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="mb-0" disabled>
                      in cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* item footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0 ">{title}</p>
            <h5 className="text-color">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>

          <div className="text-super-light mx-auto className='d-flex'">
            {" "}
            <i className="fas fa-store px-2 pb-3" />
            {company}
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

// styled components
const ProductWrapper = styled.div`
  .card {
    position: relative;
    border-radius: 20px;
    border: 0.2rem solid var(--secondColor);
    transition: all 200ms ease-in-out;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 200ms ease-in-out;
  }
  &:hover {
    .card {
      /* border: 0.1rem solid var(--secondColor); */
      background: var(--mainColorLight);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: transform 200ms ease-in-out;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }

  .cart-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0.2rem 0.4rem;
    background: var(--secondColor);
    border: none;
    color: var(--mainColorBackground);
    font-size: 2rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: transform 200ms ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    cursor: pointer;
    color: var(--mainColorDark);
  }
`;
