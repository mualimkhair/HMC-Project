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
            <div className="bg-white rounded-md w-60 h-60 flex flex-col justify-between relative ">
              <img src={image} alt="" className="object-contain h-full block rounded-md" />
              <div className="absolute bottom-0 bg-primary w-full rounded-md">
                <h3>{title}</h3>
                <p className="bg-secondary text-primary text-center">${price}</p>
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
