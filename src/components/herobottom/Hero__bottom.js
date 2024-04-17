import React from "react";
import { NavLink } from "react-router-dom";

export default function Hero__bottom() {
  return (
    <div className="hero__bottom">
      <div className="hero__container">
        <div className="hero__bottom__wrapper">
          <NavLink>Заказать курс</NavLink>
          <ul className=" hero__bottom__one__list">
            <li className=" hero__bottom__one__list__item">
              <p>Учеников всего:</p>
              <span>200</span>
            </li>
            <li className=" hero__bottom__one__list__item">
              <p>Успешно закончили курс:</p>
              <span>190</span>
            </li>
          </ul>
          <ul className=" hero__bottom__two__list">
            <li className=" hero__bottom__two__list__item">
              <p>Заработано учениками:</p>
              <span>400 000₽</span>
            </li>
            <li className="hero__bottom__two__list__item">
              <h3></h3>
              <h4></h4>
            </li>
            <li className=" hero__bottom__two__list__item">
              <p>0</p>
              <p>1000 000₽</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
