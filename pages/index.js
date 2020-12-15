import React from 'react'
import RestaurantList from "../components/restaurantList";

export default function Home({restaurants}) {
  console.log(restaurants);
  return (
    <>
    <h2>
      Grubs
    </h2>
    <RestaurantList />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      restaurants: []
    }
  }
}