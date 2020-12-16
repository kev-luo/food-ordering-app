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

export default function FoodCard({ data }) {
  const { id, name, description, image, price } = data;
  return (
    <Card>
      <Image image={`${process.env.NEXT_PUBLIC_API_URL}${image.url}`} />
      <Info>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Info>
      {price ? (
        <Link href="/" passHref>
          <Button>Add</Button>
        </Link>
      ) : (
        <Link as={`/restaurant/${id}`} href={`/restaurant?id=${id}`} passHref>
          <Button>View</Button>
        </Link>
      )}
    </Card>
  );
}
