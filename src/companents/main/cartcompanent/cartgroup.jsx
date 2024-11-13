import React from "react";
import Cart from "./cart";

function CartGroup({ cartitem }) {
  
  function addToCard(element) {
    const order = JSON.parse(localStorage.getItem('order')) || [];
    const checked = order.find((el) => el.id === element.id);

    if (!checked) {
      const updated = [...order, { ...element, value: 1 }];
      localStorage.setItem("order", JSON.stringify(updated));
    } else {
      checked.value += 1;
      localStorage.setItem("order", JSON.stringify(order));
    }
  }

  return (
    <div className="cart-list">
      {cartitem.map((el) => {
        return <Cart key={el.id} objects={el} gettocart={addToCard} />;
      })}
    </div>
  );
}

export default CartGroup;
