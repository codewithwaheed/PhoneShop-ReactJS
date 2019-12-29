import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { ProductConsumer } from "../Context";

class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { openSignInModel } = value;
          return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
              <Link to="/">
                <img
                  src={logo}
                  alt="store"
                  className="navbar-brand mylogo"
                ></img>
              </Link>
              <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                  <Link to="/" className="nav-link mynav">
                    products
                  </Link>
                </li>
              </ul>
              <Link to="/Cart" className="ml-auto">
                <ButtonContainer>
                  <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                  </span>
                  my cart
                </ButtonContainer>
              </Link>
              <ButtonContainer
                onClick={() => {
                  openSignInModel();
                }}
                className="ml-2"
                carts
              >
                Sign In
              </ButtonContainer>
              <ButtonContainer className="ml-2" carts>
                Sign Up
              </ButtonContainer>
            </NavWrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default Navbar;
