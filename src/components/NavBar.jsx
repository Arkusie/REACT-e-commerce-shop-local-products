import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 p-2">
        <Link to="/">
          <img src={logo} width="210px" alt="a store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ml-5 ">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
          <li className="nav-item ml-5 ">
            <Link to="/" className="nav-link">
              about
            </Link>
          </li>
          <li className="nav-item ml-5 ">
            <Link to="/cart" className="ml-auto">
              <ButtonContainer>
                <span className="mr-0">
                  <i className="fas fa-cart-plus" />
                </span>
              </ButtonContainer>
            </Link>
          </li>
        </ul>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background-color: var(--mainColorDark);
  height: 85px;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
  }
  li {
    z-index: 100;
    border-bottom: 2px solid var(--mainColorDark);
    transition: all 200ms ease;
  }
  li:hover {
    border-bottom: 2px solid var(--mainColorLight);
  }

  .nav-link {
    color: var(--mainColorLight) !important;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
  }
`;
