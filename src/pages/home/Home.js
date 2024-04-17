import React, { Component } from "react";
import Hero from "../../components/hero/Hero";
import Hero__bottom from "../../components/herobottom/Hero__bottom";
import Homewrapper from "../../components/homewraper/Homewrapper";
import Home__Section from "../../components/homesection/Home__Section";
import Homecards from "../../components/homecards/Homecards";
import Homebox from "../../sass/components/homebox/Homebox";
import homelittle from "../../assets/images/homelittlelogo.png";
import homelittlerasm from "../../assets/images/homelittle.png";
import homeaccountlogo from "../../assets/images/homeaccountlogo.svg";
import { NavLink } from "react-router-dom";
import account1 from "../../assets/images/accountimg.png";
import account2 from "../../assets/images/accountimg2.png";
import account3 from "../../assets/images/accountimg3.png";
import Footer from "../../components/footer/Footer";
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <Hero__bottom />
        <Homewrapper />
        <Home__Section />
        <Homecards />
        <Homebox />
        <div className="home__list">
          <div className="hero__container">
            <div className="home__list__wrapper">
              <div className="home__list__top">
                <img src={homelittle} alt="" />
                <h2>Программа обучения</h2>
                <p>
                  Больше 90% учеников прошли полный курс и смогли собрать свой
                  первый компьютер
                </p>
              </div>
              <div className="home__list__bottom">
                <ul className="home__lists">
                  <li>Красивая часть курса, которая помогает в успехе</li>
                  <li>Красивая часть курса, которая помогает в успехе</li>
                  <li>Красивая часть курса, которая помогает в успехе</li>
                  <li>Красивая часть курса, которая помогает в успехе</li>
                </ul>
                <img src={homelittlerasm} alt="" />
                <ul className="home__lists">
                  <li>Красивая часть курса, которая помогает в успехе</li>
                  <li>Красивая часть курса, которая помогает в успехе</li>
                  <li>Красивая часть курса, которая помогает в успехе</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="home__account">
          <div className="hero__container">
            <div className="home__account__wrapper">
              <div className="home__account__top">
                <img src={homeaccountlogo} alt="" />
                <h2>Ваши преподаватели</h2>
              </div>
              <ul className="home__account__bottom">
                <li>
                  <img src={account1} alt="" />
                  <h3>Дмитрий Иванов</h3>
                  <p>Специалист по видеокартам</p>
                  <NavLink>Биография</NavLink>
                </li>
                <li>
                  <img src={account2} alt="" />
                  <h3>Дмитрий Иванов</h3>
                  <p>Специалист по видеокартам</p>
                  <NavLink>Биография</NavLink>
                </li>
                <li>
                  <img src={account3} alt="" />
                  <h3>Дмитрий Иванов</h3>
                  <p>Специалист по видеокартам</p>
                  <NavLink>Биография</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
