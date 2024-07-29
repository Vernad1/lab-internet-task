import React from "react";
import style from "./reviews.module.css";
import { Carousel } from "../carousel/Carousel";

export const Reviews: React.FC = () => {
  return (
    <section className={style.reviews}>
      <div className={style.container}>
        <div className={style.reviewsTitle}>Отзывы</div>
        <Carousel></Carousel>
      </div>
    </section>
  );
};
