import React from "react";

const Productlist = ({ product, addToCart }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        marginTop:"20px"
      }}
    >
      {product.map((productItem, productIndex) => {
        return (
          <div style={{width:"250px",height:"300px",border:"2px solid black",margin:"8px 10px",padding:"10px 10px",background:"white",borderRadius:"12px"}}>
            <img src={productItem.url} alt="" style={{ width: "250px",height:"150px",borderRadius:"15px" }} />
            <h2>{productItem.name}</h2>
            <h3>${productItem.price}</h3>
            <button style={{width:"160px",background:"black",color:"white",height:"40px"}} onClick={()=>addToCart(productItem)}>Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Productlist;
