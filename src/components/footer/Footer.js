import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import media1 from "../../assets/images/vk.svg";
import media2 from "../../assets/images/youtbe.svg";
import media3 from "../../assets/images/facebook.svg";
import media4 from "../../assets/images/instagramm.svg";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="hero__container">
          <div className="footer__wrapper">
            <h2>Статьи каждую неделю</h2>
            <p>Статьи каждую неделю</p>
            <div className="input__wrapper">
              <input placeholder="E-mail" type="text" />
              <NavLink>Подписаться</NavLink>
            </div>
            <div className="media__wrapper">
              <img src={media1} alt="" />
              <img src={media2} alt="" />
              <img src={media3} alt="" />
              <img src={media4} alt="" />
            </div>
            <span>Templates #18. More on Figma.info</span>
          </div>
        </div>
      </div>
    );
  }
}
