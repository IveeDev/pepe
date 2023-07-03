import React from "react";
import medal from "../../assets/img/medal.png";
import "./Medal.scss";

const Medal = ({ text }) => {
  return (
    <div className="medal">
      <img src={medal} alt="medal" />
      <span>{text}</span>
    </div>
  );
};

export default Medal;
