import React from 'react'
import { CardElement } from "@stripe/react-stripe-js";

import { InputContainer, Label } from "../../styles/Form";

export default function CheckoutCard() {
  return (
    <InputContainer>
      <Label>Credit or Debit Card</Label>
      <CardElement />
    </InputContainer>
  )
}
