import React from "react";

import {
  DishRow,
  DishName,
  DishQty,
  DishPrice,
  DishTotal,
  Toggle
} from "../../styles/Restaurants";
import { useCartContext } from "../../context/CartContext";

export default function CartItem({dish}) {
  const { removeFromCart, addToCart } = useCartContext();

  return (
    <DishRow>
      <DishName>{dish.name}</DishName>
      <DishQty>{dish.quantity}</DishQty>
      <DishPrice>${(Number(dish.price)).toFixed(2)}</DishPrice>
      <DishTotal>${(Number(dish.quantity) * Number(dish.price)).toFixed(2)}</DishTotal>
      <Toggle>
        <button onClick={() => removeFromCart(dish)}>-</button>
        <button onClick={() => addToCart(dish)}>+</button>
      </Toggle>
    </DishRow>
  );
}
