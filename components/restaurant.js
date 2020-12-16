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

export default function Restaurant({ data }) {
  const { id, name, description, image } = data;
  return (
    <Card>
      <Image image={`${process.env.NEXT_PUBLIC_API_URL_IMG}${image.url}`} />
      <Info>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Info>
      <Link as={`/restaurant/${id}`} href={`/restaurant?id=${id}`} passHref>
        <Button>View</Button>
      </Link>
    </Card>
  );
}
