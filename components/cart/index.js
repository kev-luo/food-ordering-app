import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  CartContainer,
  CartTitle,
  CartFooterTitle,
  CartFooterTotal,
  ClearBtn,
  OrderBtn,
} from "../../styles/Restaurants";
import CartItem from "./cartItem";
import { useCartContext } from "../../context/CartContext";
import { useAuthContext } from "../../context/AuthContext";

export default function Cart() {
  const { cart, clearCart } = useCartContext();
  const { pathname } = useRouter();
  const { user } = useAuthContext();

  return (
    <CartContainer>
      <CartTitle>Your order:</CartTitle>
      {cart.items.map((item) => {
        return <CartItem key={item.id} dish={item} />;
      })}
      <CartFooterTitle>Total</CartFooterTitle>
      <CartFooterTotal>${Number(cart.total).toFixed(2)}</CartFooterTotal>
      {pathname === "/restaurant" && (
        <>
          <ClearBtn onClick={clearCart}>Clear</ClearBtn>
          <Link href={user ? "/checkout" : "/login"} passHref>
            <OrderBtn>Order</OrderBtn>
          </Link>
        </>
      )}
    </CartContainer>
  );
}
