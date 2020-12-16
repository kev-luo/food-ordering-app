import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Cookies from "js-cookie";
import fetch from "isomorphic-fetch";

import {
  CheckoutContainer,
  FormContainer,
  FormCheckout,
} from "../../styles/Checkout";
import { InputContainer, Label, Input, Button } from "../../styles/Form";
import Cart from "../cart";
import CheckoutCard from "./checkoutCard";

export default function CheckoutForm() {
  const [formData, setFormData] = useState({ address: "", city: "" });
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cardElement = elements.getElement(CardElement);
    console.log(cardElement);
  };

  return (
    <CheckoutContainer>
      <Cart />
      <FormContainer>
        <FormCheckout onSubmit={handleSubmit}>
          <InputContainer>
            <Label>Address</Label>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            <Label>City</Label>
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </InputContainer>
          <CheckoutCard />
          <Button type="submit">{loading ? "Loading..." : "Checkout"}</Button>
        </FormCheckout>
      </FormContainer>
    </CheckoutContainer>
  );
}
