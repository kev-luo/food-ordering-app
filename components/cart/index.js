import React from "react";

import {
  CartContainer,
  CartTitle,
  CartFooterTitle,
  CartFooterTotal,
} from "../../styles/Restaurants";
import CartItem from "./cartItem";

export default function Cart() {
  return (
    <CartContainer>
      <CartTitle>Your order:</CartTitle>
      <CartItem />
      <CartItem />
      <CartFooterTitle>Total</CartFooterTitle>
      <CartFooterTotal>$$$</CartFooterTotal>
    </CartContainer>
  );
}
