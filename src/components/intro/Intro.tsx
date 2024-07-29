import React, { useState } from "react";
import style from "./intro.module.css";
import { Button } from "../ui/button/Button";
import { Typography } from "../ui/typography/Typography";

export const Intro: React.FC = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  function reportWindowSize() {
    setWindowSize(window.innerWidth);
  }

  window.addEventListener("resize", reportWindowSize);

  return (
    <section className={style.intro}>
      <div className={style.container}>
        <Typography
          customStyle={{ textAlign: "center", marginBottom: "17px" }}
          Tag="h1"
          variant={windowSize <= 375 ? "h4" : windowSize <= 768 ? "h3" : "h1"}
        >
          Говорят, никогда не поздно сменить профессию
        </Typography>
        <h2 className={style.suptitle}>
          Сделай круто тестовое задание и у тебя получится
        </h2>
        <Button variant="secondary">Проще простого</Button>
      </div>
    </section>
  );
};
