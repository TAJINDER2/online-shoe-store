import React, { useState,useEffect } from "react";

const Cartlist = ({ cart }) => {
  const [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(cart);
  }, [cart]);
  return (
    <div style={{ width: "50%", paddingLeft:"40px" }}>
      <h2>Cart Items</h2>
      <div style={{height:"400px",width:"400px"}}>
        {CART.map((cartItem, cartIndex) => {
          return (
            <div style={{border:"2px solid black",height:"100px", background:"white", margin:"2px 4px",borderRadius:"12px",padding:"10px 10px"}}>
              <img
                src={cartItem.url}
                alt=""
                style={{ width: "80px", height: "80px" ,borderRadius:"5px"}}
              />
              <span style={{
                fontSize:"22px",
                marginBottom:"50px",
                marginLeft:"20px",
                marginRight:"10px"
              }}>{cartItem.name}</span>
              <button
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return cartIndex === index
                      ? { ...item, quantity:item.quantity + 1 }
                      : item;
                  });
                  setCART(_CART);
                }}
                style={{
                  marginLeft:"5px",
                  marginRight:"10px"
                }}
              >
                +
              </button>
              <span style={{marginLeft:"5px",
                  marginRight:"10px"}}>{cartItem.quantity}</span>
              <button onClick={() => {
                  let _CART = CART.map((item, index) => {
                    return cartIndex === index
                      ? { ...item, quantity:item.quantity >0 ? item.quantity -1 :0 }
                      : item;
                       
                  });
                  _CART = _CART.filter(item => item.quantity > 0);
                  setCART(_CART);
                }} style={{marginLeft:"5px",
                  marginRight:"10px"}}> -</button>
              <span style={{marginLeft:"5px",
                  marginRight:"10px"}}>${cartItem.price * cartItem.quantity}</span>
            </div>
          );
        })}
        <p>
        Total :
        {CART
          .map((item) => item.price * item.quantity)
          .reduce((total, value) => total + value, 0)}
      </p>
      </div>
      
    </div>
  );
};

export default Cartlist;
