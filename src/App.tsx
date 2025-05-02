import { useState } from "react";
import Navbar from "./frontend/Navbar";
import ProductGrid, { Product } from "./frontend/ProductGrid";
import Footer from "./frontend/Footer";
import Homepage from "./frontend/Homepage";
import Lowerbody from "./frontend/Lowerbody";

export default function App() {
  const [cartItems, setCartItems] = useState<{ item: Product; quantity: number }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Function to add a product to the cart
  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.item.title === product.title);
      if (existing) {
         alert("This item is already added");
         return prev; // Avoid duplicates if item is already in cart
      }
      return [...prev, { item: product, quantity: 1 }];
    });
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (title: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((p) => {
          if (p.item.title === title) {
            const newQuantity = p.quantity + delta;
            return newQuantity <= 0 ? null : { ...p, quantity: newQuantity };
          }
          return p;
        })
        .filter(Boolean) as { item: Product; quantity: number }[] // Remove null values
    );
  };

  // Function to remove an item from the cart
  const removeItem = (title: string) => {
    setCartItems((prev) => prev.filter((p) => p.item.title !== title));
  };

  // Function to handle order placement
  const handleOrder = () => {
    alert("Order successful!");
    setCartItems([]); // Clear the cart after the order
  };

  return (
    <>
      <Navbar
        cartItems={cartItems}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        handleOrder={handleOrder}
      />
      <Homepage/>
      <ProductGrid addToCart={addToCart} />
      <Lowerbody/>
      <Footer/>
    </>
  );
}
