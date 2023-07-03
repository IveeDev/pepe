import React from "react";
import "./Coin.scss";
import plus from "../../assets/img/plus.png";

const Coin = ({ text }) => {
  return (
    <div className="coin">
      <img src={plus} alt="plus" />
      <span>{text}</span>
    </div>
  );
};

export default Coin;
