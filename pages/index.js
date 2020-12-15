import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { FETCH_RESTAURANTS_QUERY } from "../utils/graphql";
import RestaurantList from "../components/restaurantList";
import { Search, SearchBtn } from "../styles/Search";

export default function Home() {
  const [query, setQuery] = useState("");
  const { loading, data } = useQuery(FETCH_RESTAURANTS_QUERY);

  if (loading) {
    return <p>Loading restaurants</p>;
  }

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setQuery(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Search type="text" value={query} onChange={handleChange}/>
        <SearchBtn type="submit">Search</SearchBtn>
      </form>
      {data && <RestaurantList restaurants={data?.restaurants} />}
    </>
  );
}
