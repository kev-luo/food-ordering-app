import React from 'react'

import { ListContainer } from "../styles/Restaurants";
import Restaurant from "./restaurant";

export default function RestaurantList({restaurants}) {

  return (
    <ListContainer>
      {restaurants.map(restaurant => (
        <Restaurant key={restaurant.id} restaurant={restaurant}/>
      ))}
    </ListContainer>
  )
}
