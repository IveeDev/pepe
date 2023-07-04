import Slider from "infinite-react-carousel";
import React from "react";
import "./Slider.scss";
import banner from "../../assets/img/Banner.png";

const Sliders = () => {
  return (
    <div className="feature">
      {/* <img src={banner} alt="banner" /> */}
      <Slider autoplay={true} arrows={false} autoplaySpeed={5000}>
        <img src={banner} />
        <img src={banner} />
        <img src={banner} />
      </Slider>
    </div>
  );
};

export default Sliders;
