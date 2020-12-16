import React, { useState, useContext } from "react";

const initialState = {
  items: [],
  total: 0,
};

const CartContext = React.createContext(initialState);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialState);

  const addToCart = (item) => {
    console.log(item);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
