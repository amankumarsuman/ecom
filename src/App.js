import Navbar from "./component/Navbar";

import { Routes, Route, Link } from "react-router-dom";
import CartItem from "./component/CartItem";
import List from "./component/Lists";
import Electronics from "./component/Electronics";
import { useState } from "react";
import HomeAndFurniture from "./component/HomeAndFurniture";
import MensFashion from "./component/MensFashion";

export default function App() {
  const [cart, setCart] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  function handleAdd(items) {
    setCart(cart + 1);
    setCartItem([...cartItem, items]);
  }
  function removeFromCart(item) {
    setCart(cart - 1);
    console.log(item);
    var removedItems = cartItem.filter((el) => el.title != item);

    setCartItem(removedItems);
  }

  return (
    <div>
      <Navbar cart={cart} />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route
          path="cartItem"
          element={
            <CartItem cartItem={cartItem} removeFromCart={removeFromCart} />
          }
        />
        <Route path="categories" element={<List />} />
        <Route
          path="/categories/electronics"
          element={<Electronics handleAdd={handleAdd} />}
        />
        <Route
          path="/categories/furniture"
          element={<HomeAndFurniture handleAdd={handleAdd} />}
        />
        <Route
          path="/categories/mensFashion"
          element={<MensFashion handleAdd={handleAdd} />}
        />
      </Routes>
    </div>
  );
}
