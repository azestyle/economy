import React from "react";
import Header from "../header/header";
import Season from "../main/season";
import ProductSection from "../main/product";


function HomePage(){
    return(
        <div>
          <Header/>
          <Season/>
          <ProductSection/>
        </div>
    )
}

export default HomePage;