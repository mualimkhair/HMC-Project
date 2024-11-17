import React from "react";
import Home from "./modules/Home/Home.jsx";
import Cart from "./Cart.jsx";
import { Routes, Route } from "react-router-dom";
import Item from "./modules/Item/Item.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/itemlist/:id" element={<Item />} />
      </Routes>
    </>
  );
};

export default App;
