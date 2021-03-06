import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Cookies from "js-cookie";
import fetch from "isomorphic-fetch";
import { useRouter } from "next/router"

import {
  CheckoutContainer,
  FormContainer,
  FormCheckout,
} from "../../styles/Checkout";
import { InputContainer, Label, Input, Button } from "../../styles/Form";
import Cart from "../cart";
import CheckoutCard from "./checkoutCard";
import { useCartContext } from "../../context/CartContext";

export default function CheckoutForm() {
  const initialState = { address: "", city: "" }
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { cart, clearCart } = useCartContext();
  const router = useRouter();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const cardElement = elements.getElement(CardElement);
    const token = await stripe.createToken(cardElement);
    const userToken = Cookies.get("token");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
      method: "POST",
      headers: userToken && { Authorization: `Bearer ${userToken}`},
      body: JSON.stringify({
        amount: Number(Math.round(cart.total + "e2") + "e-2"),
        dishes: cart.items,
        address: formData.address,
        city: formData.city,
        token: token.token.id,
      })
    })
    if(!response.ok) {
      console.log(response);
    }
    setLoading(false);
    setFormData(initialState);
    clearCart();
    router.push("/");
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
