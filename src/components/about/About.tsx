import React from "react";
import style from "./about.module.css";
import truckImage from "../../assets/images/about/delivery-truck.svg";
import moneyImage from "../../assets/images/about/money-bags.svg";
import secureImage from "../../assets/images/about/secure.svg";
import waitingImage from "../../assets/images/about/waiting.svg";

export const About: React.FC = () => {
  return (
    <section id="about" className={style.about}>
      <div className={style.container}>
        <h2 className={style.aboutTitle}>Как это работает</h2>

        <div className={style.aboutInner}>
          <div className={style.aboutItem}>
            <img src={waitingImage} alt="about-logo" />
            <div className={style.aboutInfo}>
              <div className={style.aboutItemText}>
                Прочитай задание внимательно
              </div>
              <div className={style.aboutItemSuptext}>
                Думаю у тебя не займет это больше двух-трех минут
              </div>
            </div>
          </div>

          <div className={style.aboutItem}>
            <img src={truckImage} alt="about-logo" />
            <div className={style.aboutInfo}>
              <div className={style.aboutItemText}>
                Изучи весь макет заранее
              </div>
              <div className={style.aboutItemSuptext}>
                Подумай как это будет работать на разных разрешениях и при
                скролле
              </div>
            </div>
          </div>

          <div className={style.aboutItem}>
            <img src={secureImage} alt="about-logo" />
            <div className={style.aboutInfo}>
              <div className={style.aboutItemText}>Сделай хорошо</div>
              <div className={style.aboutItemSuptext}>
                Чтобы мы могли тебе доверить подобные задачи в будущем
              </div>
            </div>
          </div>

          <div className={style.aboutItem}>
            <img src={moneyImage} alt="about-logo" />
            <div className={style.aboutInfo}>
              <div className={style.aboutItemText}>Получи предложение</div>
              <div className={style.aboutItemSuptext}>
                Ну тут все просто, не я придумал правила, но думаю так и
                будет)))
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
