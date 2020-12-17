import React, { useState } from "react";

export default function OrderDetails({ order }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        <>
          <button onClick={() => setOpen(!open)}>-</button>
          {order.dishes.map(dish => (<p>{`x${dish.quantity} ${dish.name}`}</p>
          ))}
        </>
      ) : (
        <button onClick={() => setOpen(!open)}>+</button>
      )}
    </>
  );
}
