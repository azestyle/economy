import React, { useState } from "react";
import CartGroup from "./cartcompanent/cartgroup";
import { cartArray } from "./cartcompanent/cartfiles";
import CategoryButton from "./cartcompanent/categorybutton";

function ProductSection() {
  const [cart, setCart] = useState([...cartArray]);

  console.log(cart);



  return (
    <section>
      <div className="container">
        <div className="product-group">
          <div className="shopping-button">
            <CategoryButton setCard={setCart} />
          </div>
          <CartGroup cartitem={cart} />
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
