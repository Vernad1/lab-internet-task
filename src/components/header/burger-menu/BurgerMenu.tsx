import React, { useState } from "react";
import style from "./burgerMenu.module.css";
import { Menu } from "../menu/Menu";

export const BurgerMenu: React.FC = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const activeClass = isBurgerOpen ? style.active : "";

  const items = [
    { value: "Как это работает", href: "#about" },
    { value: "3-й блок", href: "#thirdBlock" },
    { value: "Вопросы и ответы", href: "#questions" },
    { value: "Форма", href: "#appForm" },
  ];

  return (
    <div className={style.burger}>
      <div
        className={`${style.burgerButton} ${activeClass}`}
        onClick={() => setIsBurgerOpen((prev) => !prev)}
      >
        <span></span>
      </div>
      <Menu
        isOpen={isBurgerOpen}
        closeMenu={() => setIsBurgerOpen(false)}
        items={items}
      ></Menu>
    </div>
  );
};
