import React from "react";
import medal from "../../assets/img/medal.png";
import "./Medal.scss";

const Medal = ({ text, color }) => {
  return (
    <div className="medal">
      <img src={medal} alt="medal" style={{ background: color }} />
      <span>{text}</span>
    </div>
  );
};

export default Medal;
