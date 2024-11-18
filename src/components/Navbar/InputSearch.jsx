import { MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";

const InputSearch = () => {
  return (
    <div className="relative">
      <input className="w-[280px] md:w-96 md:mr-4 mr-2 h-10 rounded-full text-bg text-lg bg-primary" type="text" placeholder="Cari Sesuatu.." />
      <button className="md:absolute md:right-4 md:top-1 absolute top-1 right-2">
        <MagnifyingGlass size={32} className="text-secondary" />
      </button>
    </div>
  );
};

export default InputSearch;
