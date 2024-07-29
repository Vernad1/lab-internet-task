import React, { MouseEventHandler } from "react";
import style from "./menu.module.css";
import { Typography } from "../../ui/typography/Typography";
import logo from "../../../assets/images/logo/Frame.svg";

interface MenuProps {
  items: any[];
  closeMenu: MouseEventHandler<HTMLLIElement>;
  isOpen: boolean;
}

export const Menu: React.FC<MenuProps> = ({ items, closeMenu, isOpen }) => {
  const openClass = isOpen ? style.isOpen : "";

  return (
    <div className={`${style.menu} ${openClass}`}>
      <div className={style.menuContent}>
        <div className={style.menuHeader}>
          <div className={style.menuLogo}>
            <div className={style.logo}>
              <div className={style.logoImage}>
                <img src={logo} alt="logo" />
              </div>
              <Typography variant="h5" customStyle={{ fontWeight: "600" }}>
                testLab
              </Typography>
            </div>
          </div>
        </div>
        <ul>
          {items.map((item) => (
            <li key={item.value} className={style.menuLink} onClick={closeMenu}>
              <a href={item.href}>{item.value}</a>
              <div className={style.linkRow}></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
