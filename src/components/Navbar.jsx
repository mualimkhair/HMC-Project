import { MagnifyingGlass, ShoppingCart, Bell, Envelope } from "@phosphor-icons/react";
import React from "react";

const Navbar = () => {
  return (
    <div className="text-primary font-mons flex bg-bg py-4 px-2 bg-red-900 items-center justify-between shadow-md shadow-white">
      <h1 className="text-secondary text-4xl ">STOREPEDIA</h1>
      <div className="w-96 ml-[650px] relative mr-8">
          <input className="w-full h-10 rounded-md text-bg text-lg" type="text" placeholder="Cari Sesuatu.." />
          <button className="absolute right-2 top-1">
            <MagnifyingGlass size={32} className="text-secondary"/>
          </button>
        </div>
      <div className="flex m-auto">
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
