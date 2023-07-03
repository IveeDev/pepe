import React from "react";
import user from "../../assets/img/pepe-img.png";
import "./User.scss";

const User = ({ username, earnedCoin }) => {
  return (
    <div className="user">
      <div className="box-img">
        <img src={user} alt="username" />
        <p>{username}</p>
      </div>

      <div className="reward">
        <p>Coin {earnedCoin}</p>
      </div>
    </div>
  );
};

export default User;
