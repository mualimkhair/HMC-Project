import { ShoppingCart } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ item = [] }) => {
  return (
    <div className="flex flex-wrap text-bg">
      {item.map((item) => {
        const { id, title, price, image } = item;
        return (
          <Link to={`/itemList/${id}`} className="grid gap-2 m-1">
            <div className="bg-white rounded-md w-40 md:w-80 h-60 md:h-80 flex flex-col justify-between relative ">
              <img src={image} alt="" className="object-contain h-1/2 md:h-2/3 block rounded-md" />
              <div className="relative h-24 bg-primary w-full rounded-md">
                <h3>{title}</h3>
                <p className="bg-secondary absolute bottom-0 w-full text-primary text-center rounded-md">${price}</p>
              </div>
            </div>
            <button className="hover:bg-secondary bg-primary hover:text-primary text-secondary transition ease-in-out duration-300 w-full flex justify-center rounded-md text-lg ">
              Tambahkan
              <ShoppingCart size={32} />
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default ItemList;
