import React from 'react'

import { Card, Image } from "../styles/Restaurants";

export default function Restaurant({ restaurant }) {
  const { name, description, image } = restaurant;
  return (
    <Card>
      <Image image={`${process.env.NEXT_PUBLIC_API_URL_IMG}${image.url}`} />
      <h4>{name}</h4>
      <p>{description}</p>
    </Card>
  )
}
