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
import { useCartContext } from "../context/CartContext";

export default function FoodCard({ data }) {
  const { id, name, description, image, price } = data;
  const { cart, addToCart } = useCartContext();

  return (
    <Card>
      <Image image={`${process.env.NEXT_PUBLIC_API_URL}${image.url}`} />
      <Info>
        <Name>
          {name}
          {price && ` ($${Number(price).toFixed(2)})`}
        </Name>
        <Description>{description}</Description>
      </Info>
      {price ? (
        <Button onClick={() => addToCart(data)}>Add</Button>
      ) : (
        <Link as={`/restaurant/${id}`} href={`/restaurant?id=${id}`} passHref>
          <Button>View</Button>
        </Link>
      )}
    </Card>
  );
}
