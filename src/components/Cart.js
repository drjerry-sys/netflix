import React, { useState } from "react";
import { useSelector } from "react-redux";
import Data from "./Data";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState(cartData);
  console.log(cartItems, cartData);
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row ">
            {cartItems.map((item) => (
              <div className="col-xs-12 col-md-3" key={item.id}>
                <div className="card">
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <strong> {item.price}</strong> <br />
                    <button className="btn btn-warning">{item.button}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
