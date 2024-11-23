import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParam] = useSearchParams()
  console.log(searchParam.get(`search`))

  

  return (
    // <Link to={`/itemList/${id}`} className="mx-1 my-2">
    //   <div className="bg-white rounded-md w-40 md:w-[280px] h-60 md:h-80 flex flex-col justify-between relative ">
    //     <img src={image} alt="" className="object-contain h-1/2 md:h-2/3 block rounded-md" />
    //     <div className="relative h-1/2 md:h-1/3  w-full rounded-md pl-2">
    //       <h3 className="truncate font-bold">{title}</h3>
    //       <h3 className="truncate">{category}</h3>
    //       <p className="absolute bottom-2 right-0 w-16 text-secondary font-bold">${price}</p>
    //       <button className="absolute hover:bg-secondary bg-white hover:text-white text-secondary transition ease-in-out duration-300 w-12 md:w-16 md:h-8 flex justify-center items-center bottom-2 rounded-full md:text-lg border border-secondary font-semibold">
    //         +
    //         <ShoppingCart size={24} />
    //       </button>
    //     </div>
    //   </div>
    // </Link>
    <h1 className="text-white">teesss</h1>
  );
};

export default Search;
