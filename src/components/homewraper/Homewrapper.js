import React from "react";
import homewrapperimg from "../../assets/images/homeimg.png";
export default function Homewrapper() {
  return (
    <div className="homewrapper">
      <div className="hero__container">
        <div className="homewrapper__wrapper">
          <img src={homewrapperimg} alt="" className="homewrapper__img" />
          <div className="homewrapper__text">
            <h2>Чем мы занимаемся?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              neque, dignissim et feugiat elit augue in suspendisse egestas.
              Dictum vestibulum mi et sed nunc, orci fermentum vestibulum,
              morbi. Et neque, adipiscing sapien sem senectus praesent aenean
              consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem
              felis sed interdum feugiat mattis elit, sollicitudin. Quam
              pharetra rhoncus risus, cursus id elementum aliquet. Nullam turpis
              arcu malesuada arcu interdum placerat nisi, lobortis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
