import React, { useState, useContext } from "react";

const initialState = {
  items: [],
  total: 0,
};

const CartContext = React.createContext(initialState);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialState);

  const item = {
    id: "2poijp2o3j",
    name: "curry noodle soup",
    price: 11,
    quantity: 1,
  };

  const addToCart = (item) => {
    const itemExists = cart.items.find((cartItem) => {
      return cartItem.id === item.id;
    });
    if (itemExists) {
      setCart((prevCart) => {
        return {
          ...prevCart,
          items: prevCart.items.map((cartItem) => {
            if (cartItem.id === item.id) {
              return {
                ...cartItem,
                quantity: cartItem.quantity+=1,
              };
            } else {
              return cartItem;
            }
          }),
        };
      });
    } else {
      setCart((prevCart) => {
        return {
          ...prevCart,
          items: [
            ...prevCart.items,
            { id: item.id, name: item.name, price: item.price, quantity: 1 },
          ],
        };
      });
    }
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
