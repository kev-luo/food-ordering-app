import React, { useState, useContext, useEffect } from "react";
import Cookie from "js-cookie";

const initialState = {
  items: [],
  total: 0,
};

const CartContext = React.createContext(initialState);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialState);

  const total = (arr) => {
    return arr.reduce((a,b) => {
      return a + (Number(b.price) * Number(b.quantity))
    }, 0)
  }

  const addToCart = (item) => {
    const itemExists = cart.items.find((cartItem) => {
      return cartItem.id === item.id;
    });
    
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

        Cookie.set("cart", newCart);

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

        Cookie.set("cart", newCart);

        return {
          ...prevCart,
          items: newCart,
          total: total(newCart),
        };
      });
    }
  };

  const clearCart = () => {
    setCart(initialState);
  }

  const checkCart = () => {
    const cart = Cookie.get("cart");
    console.log(cart);
    if(cart !== undefined) {
      setCart({
        items: JSON.parse(cart),
        total: total(JSON.parse(cart))
      })
    }
  }

  useEffect(() => {
    checkCart();
  }, [])

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
