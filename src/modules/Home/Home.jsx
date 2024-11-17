import React from "react";
import { useEffect, useState } from "react";
import Side from "../../components/Side";
import ItemList from "../../components/ItemList";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setItems(data);
    };
    fetchItems();
  }, []);
  return (
    <>
      <div className="flex">
        <Side />
        <div className="mt-8 ml-8 ">
          <h1 className="text-primary font-bold text-4xl mb-8">Beranda</h1>
          {items.length > 0 ? <ItemList item={items} /> : <div>loading...</div>}
          <ItemList />
        </div>
      </div>
    </>
  );
};

export default Home;
