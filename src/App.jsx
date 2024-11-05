import { useEffect, useState } from "react";
import ItemList from "./components/ItemList.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Side from "./components/Side.jsx";

const App = () => {

  const [item, setItem] = useState([])

  useEffect(() => {
    const fetchItem = async() => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setItem(data)
    }
    fetchItem()
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Side />
        <div className="mt-8 ml-8 ">
          <h1 className="text-primary font-bold text-4xl mb-8">Beranda</h1>
          {
            item.length > 0 ? 
            <ItemList item={item} />
            :
            <div>loading...</div>
          }
          <ItemList />
        </div>
      </div>
    </>
  );
}

export default App;
