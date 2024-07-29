import React from "react";
import style from "./thirdBlock.module.css";

export const ThirdBlock: React.FC = () => {
  return (
    <section className={style.thirdBlock} id="thirdBlock">
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.leftTitle}>
            Круто, ты дошел до третьего блока
          </div>
          <div className={style.leftText}>
            63% опрошенных пользовались кредитами из-за того, что не могли
            покрыть непредвиденные расходы свыше 15 000 ₽. Доступ к заработанным
            деньгам помогает отказаться от кредитов и экономить деньги на
            процентах и штрафах.
          </div>
        </div>
        <div className={style.right}>
          <div className={style.rightImage}>
            <img
              src="/src/assets/images/third-block-image.png"
              alt="third-block-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
