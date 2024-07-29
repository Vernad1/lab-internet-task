import React, { useState } from "react";
import style from "./header.module.css";
import { BurgerMenu } from "./burger-menu/BurgerMenu";
import logo from "../../assets/images/logo/Frame.svg";

export const Header: React.FC = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  function reportWindowSize() {
    setWindowSize(window.innerWidth);
  }

  window.addEventListener("resize", reportWindowSize);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <div className={style.logoImage}>
            <img src={logo} alt="logo" />
          </div>
          <h5 className={style.logoText}>testLab</h5>
        </div>

        {windowSize >= 768 ? (
          <nav className={style.navigation}>
            <a href="#about" className={style.navigationLink}>
              Как это работает
            </a>
            <a href="#thirdBlock" className={style.navigationLink}>
              3-й блок
            </a>
            <a href="#questions" className={style.navigationLink}>
              Вопросы и ответы
            </a>
            <a href="#appForm" className={style.navigationLink}>
              Форма
            </a>
          </nav>
        ) : (
          <BurgerMenu></BurgerMenu>
        )}
      </div>
    </header>
  );
};
