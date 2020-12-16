import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  CartContainer,
  CartTitle,
  CartFooterTitle,
  CartFooterTotal,
  OrderBtn
} from "../../styles/Restaurants";
import CartItem from "./cartItem";
import { useCartContext } from "../../context/CartContext";

export default function Cart() {
  const { cart } = useCartContext();
  const { pathname } = useRouter();

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
      {pathname === "/restaurant" && (
        <Link href="/checkout" passHref>
          <OrderBtn>Order</OrderBtn>
        </Link>
      )}
    </CartContainer>
  );
}
