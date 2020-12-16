import React from "react";
import { CardElement } from "@stripe/react-stripe-js";

import { InputContainer, Label } from "../../styles/Form";
import { CardDiv } from "../../styles/Checkout";

export default function CheckoutCard() {
  return (
    <InputContainer>
      <Label>Credit or Debit Card</Label>
      <CardDiv>
        <CardElement options={{ style: { width: "100%" } }} />
      </CardDiv>
    </InputContainer>
  );
}
