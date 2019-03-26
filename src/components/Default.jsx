import React, { Component } from "react";

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title pt-6">
            <h1 className="display-3">404</h1>
            <h3>error</h3>
            <h3>page not found</h3>
            <h6>
              The URL: <span className="text-danger">{this.props.location.pathname}</span> was not found
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
