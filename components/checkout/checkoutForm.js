import React, { useState } from "react";

import { CheckoutContainer, FormContainer, FormCheckout } from "../../styles/Checkout";
import { InputContainer, Label, Input } from "../../styles/Form";
import Cart from "../cart";

export default function CheckoutForm() {
  const [formData, setFormData] = useState({ address: "", city: "" });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <CheckoutContainer>
      <Cart />
      <FormContainer>
        <FormCheckout>
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
        </FormCheckout>
      </FormContainer>
    </CheckoutContainer>
  );
}
