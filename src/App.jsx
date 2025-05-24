import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./modules/Home/index.jsx";
import Cart from "./Cart.jsx";
import Item from "./modules/Item/index.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./modules/Footer/Footer.jsx";
import Search from "./modules/Search/index.jsx";
import Login from "./modules/Login/index.jsx";

const App = () => {
  const location = useLocation();

  // Cek apakah path sekarang adalah "/"
  const isLoginPage = location.pathname === "/";

  return (
    <>
      {!isLoginPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/itemlist/:id" element={<Item />} />
        <Route path="/modules/Search" element={<Search />} />
      </Routes>

      {!isLoginPage && <Footer />}
    </>
  );
};

export default App;
