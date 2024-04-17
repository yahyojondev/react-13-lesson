import React, { Component } from "react";
import { herorouters } from "../../static/Router";

export default class Hero extends Component {
  render() {
    const heroitem = herorouters?.map((el) => (
      <li key={el.id} className="hero__list__item">
        <p>{el.title}</p>
        <span>{el.text}</span>
      </li>
    ));
    return (
      <div className="hero">
        <div className="hero__container">
          <div className="hero__wrapper">
            <h1 className="hero__title">Первый курс по компьютерной сборке</h1>
            <ul className="hero__list">{heroitem}</ul>
          </div>
        </div>
      </div>
    );
  }
}
