import { ShoppingCart, Bell, Envelope } from "@phosphor-icons/react";
import React from "react";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <div className="text-primary font-mons flex bg-black py-4 px-2 bg-red-900 items-center justify-between shadow-primary shadow-sm z-50 sticky top-0">
      <h1 className="text-primary text-4xl font-ultra">store<span className="text-secondary">Pedia</span></h1>
      <InputSearch />
      <div className="flex m-auto font-mons">
        <div className="grid grid-cols-3 gap-4 w-32">
          <button className="bg-primary rounded-full text-bg justify-items-center">
            <ShoppingCart size={24}/>
          </button>
          <button className="bg-primary rounded-full text-bg justify-items-center">
            <Bell size={24} />
          </button>
          <button className="bg-primary rounded-full text-bg justify-items-center">
            <Envelope size={24} />
          </button>
        </div>
        <img src="../../src/assets/nacht.jpg" alt="La Ode" className="ml-8 w-8 h-8 rounded-full border border-primary"/>
      </div>
    </div>
  );
};

export default Navbar;
