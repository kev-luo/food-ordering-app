import React from 'react'

import { ListContainer } from "../styles/Restaurants";
import Restaurant from "./restaurant";

export default function DishList({dishes}) {
  return (
    <ListContainer>
      {dishes.map(dish => (
        <Restaurant key={dish.id} data={dish} />
      ))}
    </ListContainer>
  )
}
