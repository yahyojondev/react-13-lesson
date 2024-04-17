import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Routers } from "../../static/Router";
import navbarlogo from "../../assets/images/navbarlogo.svg";

export default class Navbar extends Component {
  render() {
    const navbaritem = Routers?.map((el) => (
      <li key={el.id} className="navbar__list__item">
        <NavLink className="navbar__link" to={el.path}>
          {el.title}
        </NavLink>
      </li>
    ));
    return (
      <div className="navbar">
        <div className="container">
          <div className="navbar__wrapper">
            <img src={navbarlogo} alt="navbar__logo" className="navbar__img" />
            <ul className="navbar__list">{navbaritem}</ul>
            <NavLink to={"/login"} className="navbar__btn">
              Зайти в кабинет{" "}
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
