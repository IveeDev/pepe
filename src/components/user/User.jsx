import React from "react";
import user from "../../assets/img/pepe-img.png";
import coins from "../../assets/img/coins.png";
import "./User.scss";
import { Link } from "react-router-dom";

const User = ({ username, earnedCoin }) => {
  return (
    <div className="user">
      <div className="box-img">
        <Link to={"/"}>
          <img src={user} alt="username" />
        </Link>
        <p>{username}</p>
      </div>

      <div className="reward">
        <img src={coins} alt="coins" />
        <p>{earnedCoin}</p>
      </div>
    </div>
  );
};

export default User;
