import { useState, useContext } from "react";

const CartContext = React.createContext({ cart: { items: [], total: 0 } });

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext);
}