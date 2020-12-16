import React from "react";

import { ListContainer } from "../styles/Restaurants";
import FoodCard from "./foodCard";

export default function RestaurantList({ restaurants, query }) {
  const searchQuery = restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <ListContainer>
      {searchQuery.length === 0 ? (
        "No results found"
      ) : (
        searchQuery.map((restaurant) => (
          <FoodCard key={restaurant.id} data={restaurant} />
        ))
      )}
    </ListContainer>
  );
}
