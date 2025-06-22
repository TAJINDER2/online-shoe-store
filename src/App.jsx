import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Productlist from "./components/Productlist";
import Cartlist from "./components/Cartlist";

function App() {
  const [product, setProduct] = useState([
    {
      url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ8EZ02DpdjrTrl-5PxjnHb0-hh5JirmDBm0eGwAUrthNpY71NWIBzLQzPnz4Yj7suADeCwcPO70bff18UhMj_DinN4lRVwMjRY4Ctr02BLUmW_h7nVSFmR",
      name: "Red Tape",
      price: 1500,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSu8bw9KgA0U6wOOpv2uiYuIcHydVOYErOuSpW3hD08CEYBl8VMVL1c9_Kg9DHDsBG07hA5dr81AAfSYpY2pyhJTYPJDB7qCJtCKMkC9B1o1W2rUvGwxLTIhgw",
      name: "Campus",
      price: 1800,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRmk3LrLsQloxEbTYmZvp7wYn1IibJd9mH00Sz--YZgZOj96Dr4Ag8OWmoNUWG4TrJdKtulXt1cbCTGrEiAVg55rrMWw5ge_QqrptUqrBuFHo9R8oeq-CiD19k",
      name: "Nike",
      price: 2000,
    },
    {
      url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRzr361Vl6kJyNZB9OZV3zc_-vJxU1l5HFL4HU8gEeBCDp6uAdtVI-NTDervEo68k_50VWbMJIsAgHiGbxu2CyfuwttbNXQkLFXzbRilf1OsGom9_XqOI2BgSMZ",
      name: "Puma",
      price: 2320,
    },
  ]);
  const [cart, setCart] = useState([]);
  const addToCart = (data) => {
    setCart([...cart,{...data,quantity:1}]);
  };

  return (
    <>
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <Productlist product={product} addToCart={addToCart} />
          <Cartlist cart={cart} />
        </div>
      </div>
    </>
  );
}

export default App;
