import React, { useReducer, useEffect } from "react";
import { cartArray } from "./cartfiles";





const initialState = { take: "all" };

function reducer(state, action) {
  switch (action.type) {
    case "get-men":
      return { take: "men" };
    case "get-woman":
      return { take: "woman" };
    case "get-jewelery":
      return { take: "jewelry" };
    case "get-electronic":
      return { take: "electronic" };
    case "get-all":
      return { take: "all" };
      default:
      state;
  }
}

function CategoryButton({takelement}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    let filtercart;
  if(state.take==='all'){
    filtercart=cartArray
  }else{
    filtercart=cartArray.filter((card)=>card.type===state.take)
  }
  takelement(filtercart);
  },[state.take]);
  

  return (
    <div className="fives-button">
      <button onClick={()=>dispatch({type:"get-all"})}>All</button>
      <button onClick={()=>dispatch({type:"get-men"})}>Men's Clothing</button>
      <button onClick={()=>dispatch({type:"get-woman"})}>Women's Clothing</button>
      <button onClick={()=>dispatch({type:"get-jewelery"})}>Jewelery</button>
      <button onClick={()=>dispatch({type:"get-electronic"})}>Electronics</button>
    </div>
  );
}

export default CategoryButton;








