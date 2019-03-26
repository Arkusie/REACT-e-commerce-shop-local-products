import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        {/* 1 */}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Products</p>
        </div>
        {/* 2 */}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">name</p>
        </div>
        {/* 3 */}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">price</p>
        </div>
        {/* 4 */}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">quantity</p>
        </div>
        {/* 5 */}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>
        {/* 6 */}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
      </div>
    </div>
  );
}
