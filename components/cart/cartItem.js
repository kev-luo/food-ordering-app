import React from "react";

import {
  DishRow,
  DishName,
  DishQty,
  DishPrice,
  DishTotal,
} from "../../styles/Restaurants";

export default function CartItem() {
  return (
    <DishRow>
      <DishName>Curry Noodle Soup</DishName>
      <DishQty>1</DishQty>
      <DishPrice>$12.99</DishPrice>
      <DishTotal>$12.99</DishTotal>
    </DishRow>
  );
}
