import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { Container } from "../styles/Global";
import CheckoutForm from "../components/checkout/checkoutForm";

export default function Checkout() {
  const stripePromise = loadStripe("pk_test_51HyQjfFAfBt3uEU9ggyxrXnftJk3WxOGuDcco3y2vg9hyPGseoM4zx4g1x0banyXzyhxO7nG6GLopamRXXhJEeF100jpPTDvdz")
  
  return (
    <Container>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </Container>
  );
}
