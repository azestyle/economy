import React, { createContext, useState } from "react";
import Header from "../header/header";
import Season from "../main/season";
import ProductSection from "../main/product";

export const CardContext = createContext();

function HomePage() {
  const [cardCount, setCardCount] = useState(() => {
    const storedData = localStorage.getItem("order") ?? [];
   return JSON.parse(storedData).reduce((acc, el) => {
      acc = acc + el.value;
      return acc;
    }, 0);
  });

  console.log(cardCount);
  return (
    <div>
      <CardContext.Provider value={{ cardCount, setCardCount }}>
        <Header />
        <Season />
        <ProductSection />
      </CardContext.Provider>
    </div>
  );
}

export default HomePage;
