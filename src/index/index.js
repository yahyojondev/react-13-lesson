import Главная from "../pages/Главная/Главная";
import Курсы from "../pages/Курсы/Курсы";
import Расписание from "../pages/Расписание/Расписание";
import Преподаватели from "../pages/Преподаватели/Преподаватели";
import Рассылка from "../pages/Рассылка/Рассылка";
import Контакты from "../pages/Контакты/Контакты";

export const Routersproduct = [
  {
    id: 1,
    title: "Главная",
    path: "/",
    element: <Главная />,
  },
  {
    id: 2,
    title: "Курсы",
    path: "/Курсы",
    element: <Курсы />,
  },
  {
    id: 3,
    title: "Расписание",
    path: "/Расписание",
    element: <Расписание />,
  },
  {
    id: 4,
    title: "ГлаПреподавателиная",
    path: "/Преподаватели",
    element: <Преподаватели />,
  },
  {
    id: 5,
    title: "Рассылка",
    path: "/Рассылка",
    element: <Рассылка />,
  },
  {
    id: 6,
    title: "Контакты",
    path: "/Контакты",
    element: <Контакты />,
  },
];
