import React, { createContext, useState } from "react";
import all_products from "../assets/all_products.json";

export const dataContext = createContext();

export const CartProvider = ({ children }) => {
  const [products] = useState(all_products.products);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [fav, setFav] = useState(() => {
    const savedFav = localStorage.getItem("fav");
    return savedFav ? JSON.parse(savedFav) : [];
  });

  //   useEffect(() => {
  //     setProducts(all_products.products);
  //   }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  const addToFav = (product) => {
    setFav((prevFav) => {
      const updatedFav = [...prevFav, product];
      localStorage.setItem("fav", JSON.stringify(updatedFav));
      return updatedFav;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.clear();
    localStorage.removeItem("cart");
  };
  const clearFav = () => {
    setFav([]);
    localStorage.removeItem("fav");
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.newPrice, 0);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };
  const removeFromFav = (productId) => {
    setFav(fav.filter((item) => item.id !== productId));
  };

  return (
    <dataContext.Provider
      value={{
        products,
        cart,
        fav,
        addToCart,
        clearCart,
        getTotalPrice,
        removeFromCart,
        removeFromFav,
        addToFav,
        clearFav,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};
