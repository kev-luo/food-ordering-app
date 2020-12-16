import React from "react";

import {
  CartContainer,
  CartTitle,
  CartFooterTitle,
  CartFooterTotal,
} from "../../styles/Restaurants";
import CartItem from "./cartItem";
import { useCartContext } from "../../context/CartContext";

export default function Cart() {
  const { cart } = useCartContext();

  const totalOrder = () => {
    const totalCost = cart.items.reduce((a,b) => {
      return a + (Number(b.price) * Number(b.quantity))
    }, 0)
    return (
      <CartFooterTotal>
        ${totalCost}
      </CartFooterTotal>
    )
  }
  totalOrder();

  return (
    <CartContainer>
      <CartTitle>Your order:</CartTitle>
      {cart.items.map(item => {
        return (
          <CartItem key={item.id} dish={item} />
        )
      })}
      <CartFooterTitle>Total</CartFooterTitle>
      {totalOrder()}
    </CartContainer>
  );
}
