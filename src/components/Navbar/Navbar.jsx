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

      <div className="flex font-mons flex-wrap">
        <InputSearch />
        <div className="grid grid-cols-3 gap-4 w-32 ">
          <Link to={`../../Cart`} className="bg-primary rounded-full w-10 h-full text-bg justify-items-center content-center">
            <ShoppingCart size={24} />
          </Link>
          <button className="bg-primary rounded-full w-10 h-full text-bg justify-items-center">
            <Bell size={24} />
          </button>
          <button className="bg-primary rounded-full w-10 h-full text-bg justify-items-center">
            <Envelope size={24} />
          </button>
        </div>
        <img src="../../src/assets/nacht.jpg" alt="La Ode" className="ml-8 w-10 h-10 rounded-full border border-primary hidden" />
      </div>
    </div>
  );
};

export default Navbar;
