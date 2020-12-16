import React, { useState, useContext } from "react";

const initialState = {
  items: [],
  total: 0,
};

const CartContext = React.createContext(initialState);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialState);

  const addToCart = (item) => {
    const itemExists = cart.items.find((cartItem) => {
      return cartItem.id === item.id;
    });

    const total = (arr) => {
      return arr.reduce((a,b) => {
        return a + (Number(b.price) * Number(b.quantity))
      }, 0)
    }
    
    if (itemExists) {
      setCart((prevCart) => {
        const newCart = prevCart.items.map((cartItem) => {
          if (cartItem.id === item.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity+=1,
            };
          } else {
            return cartItem;
          }
        })

        return {
          ...prevCart,
          items: newCart,
          total: total(newCart),
        };
      });
    } else {
      setCart((prevCart) => {
        const newCart = [
          ...prevCart.items,
          { id: item.id, name: item.name, price: item.price, quantity: 1 },
        ]

        return {
          ...prevCart,
          items: newCart,
          total: total(newCart),
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
