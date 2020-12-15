import React from "react";

import {
  Card,
  Image,
  Info,
  Name,
  Description,
  Button,
} from "../styles/Restaurants";

export default function Restaurant({ restaurant }) {
  const { name, description, image } = restaurant;
  return (
    <Card>
      <Image image={`${process.env.NEXT_PUBLIC_API_URL_IMG}${image.url}`} />
      <Info>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Info>
      <Button>View</Button>
    </Card>
  );
}
