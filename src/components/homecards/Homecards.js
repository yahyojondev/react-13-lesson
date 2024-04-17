import React from "react";
import { homecardsproduct } from "../../static/Router";

function Homecards() {
  const homecardsitem = homecardsproduct?.map((el) => (
    <li key={el.id} className="homecards__list__item">
      <img src={el.img} alt="" />
      <h4>{el.title}</h4>
      <p>{el.text}</p>
    </li>
  ));
  return (
    <div className="homecards">
      <div className="hero__container">
        <div className="homecards__wrapper">
          <h2>Получите профессию прямо сейчас</h2>
          <ul className="homecards__list">{homecardsitem}</ul>
        </div>
      </div>
    </div>
  );
}

export default Homecards;
