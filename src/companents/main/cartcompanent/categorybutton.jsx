import React, { useReducer, useEffect } from "react";
import { cartArray } from "./cartfiles";

// const initialState = { take: "all" };

// function reducer(state, action) {
//   switch (action.type) {
//     case "get-men":
//       return { take: "men" };
//     case "get-woman":
//       return { take: "woman" };
//     case "get-jewelery":
//       return { take: "jewelry" };
//     case "get-electronic":
//       return { take: "electronic" };
//     case "get-all":
//       return { take: "all" };
//       default:

//   }
// }

function CategoryButton({ setCard }) {
  // const [state, dispatch] = useReducer(reducer, initialState);

  const handleFilter = (type) => {
    if (type !== "all") {
      setCard(cartArray.filter((card) => card.type === type));
    } else {
      setCard(cartArray);
    }
  };

  // useEffect(()=>{
  //   let filtercart;
  // if(state.take==='all'){
  //   filtercart=cartArray
  // }else{
  //   filtercart=cartArray.filter((card)=>card.type===state.take)
  // }
  // takelement(filtercart);
  // },[state.take]);

  return (
    <div className="fives-button">
      {/* <button onClick={()=>dispatch({type:"get-all"})}>All</button>
      <button onClick={()=>dispatch({type:"get-men"})}>Men's Clothing</button>
      <button onClick={()=>dispatch({type:"get-woman"})}>Women's Clothing</button>
      <button onClick={()=>dispatch({type:"get-jewelery"})}>Jewelery</button>
      <button onClick={()=>dispatch({type:"get-electronic"})}>Electronics</button> */}
      <button onClick={() => handleFilter("all")}>All</button>
      <button onClick={() => handleFilter("men")}>Men's Clothing</button>
      <button onClick={() => handleFilter("woman")}>Women's Clothing</button>
      <button onClick={() => handleFilter("jewelry")}>Jewelery</button>
      <button onClick={() => handleFilter("electronic")}>Electronics</button>
    </div>
  );
}

export default CategoryButton;
