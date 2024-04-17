import React from "react";
import homsectionimg from "../../assets/images/homesectionlogo.svg";
import section1 from "../../assets/images/section1.png";
import section2 from "../../assets/images/section2.png";
import section3 from "../../assets/images/section3.png";
import section4 from "../../assets/images/section4.png";

function Home__Section() {
  return (
    <div className="home__section">
      <div className="hero__container">
        <div className="home__section__wrapper">
          <div className="home__section__wrapper__top">
            <div className="img__text">
              <img src={homsectionimg} alt="" />
              <h2>Быстрый старт</h2>
            </div>
            <p>
              Больше 90% учеников прошли полный курс и смогли собрать свой
              первый компьютер
            </p>
          </div>
          <ul className="home__section__wrapper__bottom">
            <li>
              <h4>100%</h4>
              <img src={section1} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                eget velit quisque accumsan amet tortor. Velit, volutpat egestas
                fringilla mi porttitor tempus. Placerat dui.
              </p>
            </li>
            <li>
              <h4>75%</h4>
              <img src={section2} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                eget velit quisque accumsan amet tortor. Velit, volutpat egestas
                fringilla mi porttitor tempus. Placerat dui.
              </p>
            </li>
            <li>
              <h4>50%</h4>
              <img src={section3} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                eget velit quisque accumsan amet tortor. Velit, volutpat egestas
                fringilla mi porttitor tempus. Placerat dui.
              </p>
            </li>
            <li>
              <h4>Итог</h4>
              <img src={section4} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                eget velit quisque accumsan amet tortor. Velit, volutpat egestas
                fringilla mi porttitor tempus. Placerat dui.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home__Section;
