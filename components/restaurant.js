import React from "react";
import Link from "next/link";

import {
  Card,
  Image,
  Info,
  Name,
  Description,
  Button,
} from "../styles/Restaurants";

export default function Restaurant({ restaurant }) {
  const { id, name, description, image } = restaurant;
  return (
    <Card>
      <Image image={`${process.env.NEXT_PUBLIC_API_URL_IMG}${image.url}`} />
      <Info>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Info>
      <Link href={`/restaurant?id=${id}`} passHref>
        <Button>View</Button>
      </Link>
    </Card>
  );
}
