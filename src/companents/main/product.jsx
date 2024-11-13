import React, { useState } from "react";
import CartGroup from "./cartcompanent/cartgroup";
import CategoryButton from "./cartcompanent/categorybutton";

function ProductSection() {
  const [cart, setcart] = useState([]);

  return (
    <section>
      <div className="container">
        <div className="product-group">
          <div className="shopping-button">
            <CategoryButton takelement={setcart} />
          </div>
          <CartGroup cartitem={cart} />
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
