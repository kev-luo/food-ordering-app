import React from "react";

import {
  DishRow,
  DishName,
  DishQty,
  DishPrice,
  DishTotal,
} from "../../styles/Restaurants";

export default function CartItem({dish}) {
  return (
    <DishRow>
      <DishName>{dish.name}</DishName>
      <DishQty>{dish.quantity}</DishQty>
      <DishPrice>${dish.price}</DishPrice>
      <DishTotal>${Number(dish.quantity) * Number(dish.price)}</DishTotal>
    </DishRow>
  );
}
