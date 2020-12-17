import React from "react";

import {
  DishRow,
  DishName,
  DishQty,
  DishPrice,
  DishTotal,
  Toggle
} from "../../styles/Restaurants";

export default function CartItem({dish}) {
  return (
    <DishRow>
      <DishName>{dish.name}</DishName>
      <DishQty>{dish.quantity}</DishQty>
      <DishPrice>${(Number(dish.price)).toFixed(2)}</DishPrice>
      <DishTotal>${(Number(dish.quantity) * Number(dish.price)).toFixed(2)}</DishTotal>
      <Toggle>
        <button>-</button>
        <button>+</button>
      </Toggle>
    </DishRow>
  );
}
