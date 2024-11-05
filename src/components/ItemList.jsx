import { ShoppingCart } from "@phosphor-icons/react";
import React from "react";

const ItemList = ({ item = [] }) => {
  return (
    <div className="grid grid-cols-6 gap-4 text-bg">
      {item.map((item) => {
        const { id, title, price, category, image } = item;
        return (
          <div className="grid gap-2">
            <div className="bg-primary rounded-md w-44 h-60 flex flex-col justify-between">
              <img src={image} alt="" className="h-1/2 w-full rounded-md" />
              <div>
                <h3>{title}</h3>
                <p>{price}</p>
              </div>
            </div>
            <button className="hover:bg-secondary bg-primary hover:text-primary text-secondary transition ease-in-out duration-300 w-full flex justify-center rounded-md text-lg ">
              Tambahkan
              <ShoppingCart size={32} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
