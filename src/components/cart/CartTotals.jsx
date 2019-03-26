import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";

export default function CartTotals({ value }) {
  const { cardSubTotal, cartTax, CartTotal, clearCart, history } = value;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-3 ml-sm-5 ml-md-auto col-sm-8 text-right">
            <Link to="/">
              <button className="btn btn-outline-danger mb-2 px-4" type="button" onClick={() => clearCart()}>
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">
                subtotal: <strong>${cardSubTotal.toFixed(2)}</strong>
              </span>
            </h5>
            <h5>
              <span className="text-title">
                tax: <strong>${cartTax}</strong>
              </span>
            </h5>
            <h5>
              <span className="text-title">
                total: <strong>${CartTotal.toFixed(2)}</strong>
              </span>
            </h5>
            <br />
            <PayPalButton total={CartTotal} clearCart={clearCart} history={history} />
          </div>
        </div>
      </div>
    </>
  );
}
