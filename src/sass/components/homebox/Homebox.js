import React from "react";
import sectionlogo from "../../../assets/images/sectionlogo2.svg";
import sectionimg from "../../../assets/images/sectionimg.png";

function Homebox() {
  return (
    <div className="homebox">
      <div className="hero__container">
        <div className="homebox__wrapper">
          <div className="homebox__top">
            <img src={sectionlogo} alt="" />
            <h2>Партнеры - топовые бренды</h2>
          </div>
          <div className="homebox__bottom">
            <img src={sectionimg} alt="" />
            <img src={sectionimg} alt="" />
            <img src={sectionimg} alt="" />
            <img src={sectionimg} alt="" />
            <img src={sectionimg} alt="" />
            <img src={sectionimg} alt="" />
            <img src={sectionimg} alt="" />
            <img src={sectionimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homebox;
