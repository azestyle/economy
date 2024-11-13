import React from "react";

function Cart({objects,gettocart}){
    return(
        <div className="cart-div">
          <div className="product-img">
            <img src={objects.image} />
          </div>
            <div className="product writer">
                <h3>{objects.tittle}</h3>
                <p>{objects.text}</p>
            </div>
            <div className="product-prise">
                <p>${objects.prise}</p>
             </div>   
            <div className="product-buttons">
                <button><a href="#">Buy Now</a></button>
                <button onClick={()=>gettocart(objects)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Cart;