import React from 'react'

import { Card } from "../styles/Restaurants";

export default function Restaurant({ restaurant }) {
  const { name, description, image } = restaurant;
  console.log(image);
  return (
    <Card>
      <div>
        <img src={`${process.env.NEXT_PUBLIC_API_URL_IMG}${image.url}`} alt={name} />
      </div>
      <h4>{name}</h4>
      <p>{description}</p>
    </Card>
  )
}
