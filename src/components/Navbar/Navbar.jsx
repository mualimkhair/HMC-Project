import { ShoppingCart, Bell, Envelope } from "@phosphor-icons/react";
import React from "react";
import InputSearch from "./InputSearch";
import { Link } from "react-router-dom";
import Cart from "../../Cart";

const Navbar = () => {
  return (
    <div className="text-primary font-mons flex flex-wrap bg-black py-4 px-2 justify-between shadow-primary shadow-sm z-50 sticky top-0 w-full">
      <Link to={`/`} className="text-primary text-4xl font-ultra">
        store<span className="text-secondary">Pedia</span>
      </Link>

      <div className="flex font-mons flex-wrap justify-between ">
        <InputSearch />
        <div className="grid md:grid-cols-3 md:gap-4 md:w-32">
          <Link to={`../../Cart`} className="bg-primary rounded-full w-10 h-full text-bg justify-items-center content-center">
            <ShoppingCart size={24} className="text-secondary" />
          </Link>
          <button className="bg-primary rounded-full w-10 h-full text-bg justify-items-center hidden md:block">
            <Bell size={24} className="text-secondary" />
          </button>
          <button className="bg-primary rounded-full w-10 h-full text-bg justify-items-center hidden md:block">
            <Envelope size={24} className="text-secondary" />
          </button>
        </div>
        <img src="../../src/assets/nacht.jpg" alt="La Ode" className="md:ml-8 ml-1 w-10 h-10 rounded-full border border-primary" />
      </div>
    </div>
  );
};

export default Navbar;
