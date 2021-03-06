import React from 'react'
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import DishList from "../components/dishList";
import { SingleRestaurant } from "../styles/Restaurants";
import { FETCH_DISHES_QUERY } from "../utils/graphql";

export default function Restaurant() {
  const router = useRouter();
  const { loading, data } = useQuery(FETCH_DISHES_QUERY, { variables: {
    id: router.query.id || router.asPath.split("/")[2]
  }})
  if (loading) {
    return <p>Loading dishes</p>
  }

  return (
    <>
      {data && <SingleRestaurant>{data?.restaurant?.name}</SingleRestaurant>}
      {data && <DishList dishes={data?.restaurant?.dishes}/>}
    </>
  )
}
