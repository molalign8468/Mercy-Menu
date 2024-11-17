import React, { useState } from "react";
import Catagory from "./component/Catagory";
import Body from "./component/Body";
import Footer from "./component/Footer";
import items from "./data";
import Header from "./component/Header";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <>
      <Header />
      <Catagory filterItems={filterItems} />
      <Body items={menuItems} />
      <Footer />
    </>
  );
}

export default App;
