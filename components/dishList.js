import React from "react";

import { PageContainer, DishesContainer } from "../styles/Restaurants";
import FoodCard from "./foodCard";
import Cart from "./cart";

export default function DishList({ dishes }) {
  return (
    <PageContainer>
      <DishesContainer>
        {dishes.map((dish) => (
          <FoodCard key={dish.id} data={dish} />
        ))}
      </DishesContainer>
      <Cart />
    </PageContainer>
  );
}
