import React from 'react'
import { useQuery } from "@apollo/client";

import { FETCH_RESTAURANTS_QUERY } from "../utils/graphql";
import RestaurantList from "../components/restaurantList";

export default function Home() {
  const { loading, error, data } = useQuery(FETCH_RESTAURANTS_QUERY);
  return (
    <>
    {data && <RestaurantList restaurants={data?.restaurants}/>}
    </>
  )
}