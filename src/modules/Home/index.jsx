import React from "react";
import { useEffect, useState } from "react";
import Side from "../../components/Side";
import Carousel from "../../components/Carousel";
import ItemList from "../../components/ItemList";

const Home = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setItems(data);
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <>
      <div className="flex">
        <Side />
        <div className="mt-8 ml-8 ">
          {items.length > 0 ? <Carousel item={items} /> : <div className="text-red-600">loading...</div>}
          <h1 className="text-secondary font-bold text-4xl mb-8">Beranda</h1>
          {items.length > 0 ? <ItemList item={items} /> : <div className="text-red-600">loading...</div>}
          <ItemList />
        </div>
      </div>
    </>
  );
};

export default Home;
