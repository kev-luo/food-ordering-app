import React from 'react'

import { ListContainer } from "../styles/Restaurants";
import FoodCard from "./foodCard";

export default function DishList({dishes}) {
  return (
    <ListContainer>
      {dishes.map(dish => (
        <FoodCard key={dish.id} data={dish} />
      ))}
    </ListContainer>
  )
}
