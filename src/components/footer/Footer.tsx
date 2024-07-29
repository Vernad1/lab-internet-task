import React from "react";
import style from "./footer.module.css";

export const Footer: React.FC = () => {
  return (
    <section className={style.footer}>
      <div className={style.footerText}>© 2021 Лаборатория интернет</div>
    </section>
  );
};
