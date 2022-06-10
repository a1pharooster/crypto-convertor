import React, { useState } from "react";
import "./info.css";

const Info = (props) => {
  const [coin, setcoin] = useState("0");

  const coinHandler = (event) => {
    setcoin(event.target.value);
  };
// response.data.coins[coin].price.slice(0, 8)

  props.onSelect(coin);

  return (
    <div className="info_div">
      <select onChange={coinHandler} className="dropdown">
        <option value="0">BTC</option>
        <option value="1">ETH</option>
        <option value="8">HEX</option>
        <option value="9">SOL</option>
      </select>
    </div>
  );
};

export default Info;
