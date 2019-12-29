import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar";
import ProductList from "./Component/ProductList";
import Details from "./Component/Details";
import Cart from "./Component/Cart";
import Default from "./Component/Default";
import Model from "./Component/Model";
import SignIn from "./Component/authentication/SignIn";
import SignUp from "./Component/authentication/SignUp";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/Details" component={Details}></Route>
          <Route path="/Cart" component={Cart}></Route>
          <Route path="/Default" component={Default}></Route>
        </Switch>
        <Model />
        <SignIn />
      </React.Fragment>
    );
  }
}

export default App;
