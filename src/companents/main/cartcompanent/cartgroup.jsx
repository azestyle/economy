import React, { useContext } from "react";
import Cart from "./cart";
import { CardContext } from "../../homepage/home";

function CartGroup({ cartitem }) {

  const {setCardCount} = useContext(CardContext);

  
  function addToCard(element) {
    const order = JSON.parse(localStorage.getItem('order')) || [];
    const checked = order.find((el) => el.id === element.id);

    if (!checked) {
      const updated = [...order, { ...element, value: 1 }];
      localStorage.setItem("order", JSON.stringify(updated));
      setCardCount(prev=>prev+1);
    } else {
      checked.value += 1;
      


      localStorage.setItem("order", JSON.stringify(order));
    }
  }

  return (
    <div className="cart-list">
      {cartitem.map((el) => {
        return <Cart key={el.id} objects={el} getToCart={addToCard} />;
      })}
    </div>
  );
}

export default CartGroup;
