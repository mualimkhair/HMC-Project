import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useRef } from "react";
import { useSearchParams } from "react-router-dom";

const InputSearch = () => {
  const searchRef = useRef()
  const [searchParam, setSearchParam] = useSearchParams()

  const handleSearch = (event) => {
    event.preventDefault()
    alert(searchRef.current.value)
    const key = searchRef.current.value
    setSearchParam({search: key})
  }

  return (
    <div className="relative">
      <input className="w-[280px] md:w-96 md:mr-4 mr-2 h-10 rounded-full text-bg text-lg bg-white" type="text" placeholder="Cari Sesuatu.." ref={searchRef}/>
      <button className="md:absolute md:right-4 md:top-1 absolute top-1 right-2">
        <MagnifyingGlass size={32} className="text-secondary" onClick={handleSearch} />
      </button>
    </div>
  );
};

export default InputSearch;
