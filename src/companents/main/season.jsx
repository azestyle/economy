import React from "react";


function Season(){
    return(
        <section className="season">
            <div className="container">
               <div className="season-box">
                <img src="https://reactjs-ecommerce-app.vercel.app/assets/main.png.jpg" alt="" />
                <div className="season-text">
                    <h5>New Season Arrivals</h5>
                    <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="latest">
                    <h1>Latest Products</h1>
                    <p></p>
                </div>
                </div> 
            </div>
        </section>
    )
}

export default Season;