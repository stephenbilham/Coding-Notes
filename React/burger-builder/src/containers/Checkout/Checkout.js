import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "../Checkout/ContactData/ContactData";
import { Route } from "react-router-dom";

class Checkout extends Component {
  state = {
    ingredients: null,
    price: null
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    let ingredients = {};
    let price = null;

    for (let param of query.entries()) {
      console.log(param);
      if (param[0] === "price") {
        price = param[1];
      } else {
        // ['lettuce' : '1']
        ingredients[param[0]] = +param[1];
      }
    }

    this.setState(prevState => {
      return {
        ...prevState,
        ingredients: ingredients,
        price: price
      };
    });
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutCancelledContinue = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelledHandler={this.checkoutCancelledHandler}
          checkoutCancelledContinue={this.checkoutCancelledContinue}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={props => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.price}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
