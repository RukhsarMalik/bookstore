"use client";
import React, { createContext, useContext, useState } from 'react';

interface Book {
  id: number;
  title: string;
  price: string;
  quantity: number;
  category: string;
  image: string;
  description: string;
}

interface CartContextType {
  cartItems: Book[];
  addToCart: (item: Book) => void;
  removeFromCart: (id: number, category: string) => void;
  updateCartQuantity: (id: number, category: string, quantity: number) => void;
  clearCart: () => void; // New clearCart function
}

// Type for CartProvider props with children
interface CartProviderProps {
  children: React.ReactNode; // Explicitly define the type for children
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Book[]>([]);

  const addToCart = (item: Book) => {
    // Check if the item already exists in the cart
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === item.id && cartItem.category === item.category
    );

    if (existingItem) {
      // If the item already exists, increase its quantity
      updateCartQuantity(existingItem.id, existingItem.category, existingItem.quantity + 1);
    } else {
      // If the item doesn't exist, add it to the cart
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number, category: string) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => item.id !== id || item.category !== category
      )
    );
  };

  const updateCartQuantity = (id: number, category: string, quantity: number) => {
    // Prevent the quantity from going below 1
    if (quantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.category === category
          ? { ...item, quantity }
          : item
      )
    );
  };

 
  const clearCart = () => setCartItems([]); // Clears all items from the cart


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
