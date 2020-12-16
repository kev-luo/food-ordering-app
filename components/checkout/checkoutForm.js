import React, { useState } from "react";

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

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
