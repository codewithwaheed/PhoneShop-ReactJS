import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../Context";
import { ButtonContainer } from "../Button";
import { Link } from "react-router-dom";

class Model extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { SignInModel, closeSignInModel } = value;
          if (!SignInModel) {
            return null;
          } else {
            return (
              <ModelContainer>
                <div class="container">
                  <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                      <div class="card card-signin my-5">
                        <div class="card-body">
                          <h5 class="card-title text-center">
                            Sign In
                            <a
                              onClick={() => {
                                closeSignInModel();
                              }}
                              class="close"
                            ></a>
                          </h5>
                          <form class="form-signin">
                            <div class="form-label-group">
                              <input
                                type="email"
                                id="inputEmail"
                                class="form-control"
                                placeholder="Email address"
                                required
                                autofocus
                              />
                              <label for="inputEmail">Email address</label>
                            </div>
                            <div class="form-label-group">
                              <input
                                type="password"
                                id="inputPassword"
                                class="form-control"
                                placeholder="Password"
                                required
                              />
                              <label for="inputPassword">Password</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                class="custom-control-label"
                                for="customCheck1"
                              >
                                Remember password
                              </label>
                            </div>
                            <button
                              class="btn btn-sm btn-block mt-2 btn-primary text-uppercase"
                              type="submit"
                            >
                              Sign in
                            </button>
                            <button
                              class="btn btn-lg btn-block mt-3 btn-primary text-uppercase"
                              type="submit"
                            >
                              Sign Up
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ModelContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Model;

const ModelContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #model {
    background: var(--mainWhite);
  }
`;
