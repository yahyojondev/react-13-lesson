import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Category from "../pages/category/Category";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import Services from "../pages/services/Services";
import homecard1 from "../assets/images/homecard1.png";
import homecard2 from "../assets/images/homecard2.png";
import homecard3 from "../assets/images/homecard3.png";
import { TiLeaf } from "react-icons/ti";

export const Routers = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    title: "Главная",
  },
  {
    id: 2,
    path: "/about",
    element: <About />,
    title: "Курсы",
  },
  {
    id: 3,
    path: "/categoriy",
    element: <Category />,
    title: "Расписание",
  },
  {
    id: 4,
    path: "/contact",
    element: <Contact />,
    title: "Преподаватели",
  },
  {
    id: 5,
    path: "/login",
    element: <Login />,
    title: "Рассылка",
  },
  {
    id: 6,
    path: "/services",
    element: <Services />,
    title: "Контакты",
  },
];

export const herorouters = [
  {
    id: 1,
    title: "18",
    text: "Дней",
  },
  {
    id: 2,
    title: "18",
    text: "Часов",
  },
  {
    id: 3,
    title: "18",
    text: "Минут",
  },
  {
    id: 4,
    title: "18",
    text: "Секунд",
  },
];

export const homecardsproduct = [
  {
    id: 1,
    img: homecard1,
    title: "Только практические навыки в работе",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.",
  },
  {
    id: 2,
    img: homecard2,
    title: "Работа на самом современном оборудовании",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.",
  },
  {
    id: 3,
    img: homecard3,
    title: "Сертификация по окончании обучения",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.",
  },
];
