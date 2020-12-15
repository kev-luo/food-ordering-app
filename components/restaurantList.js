import React from "react";

import { ListContainer } from "../styles/Restaurants";
import Restaurant from "./restaurant";

export default function RestaurantList({ restaurants, query }) {
  const searchQuery = restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <ListContainer>
      {searchQuery.length === 0 ? (
        <p>No results found</p>
      ) : (
        searchQuery.map((restaurant) => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        ))
      )}
    </ListContainer>
  );
}
