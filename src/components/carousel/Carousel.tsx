import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Review } from "../review/Review";
import { Navigation, Pagination } from "swiper/modules";
import "./Carousel.css";
import "swiper/swiper-bundle.css";
import { useAppSelector } from "../../store/store";

export const Carousel: React.FC = () => {
  const reviews = useAppSelector((state) => state.content.reviewsItems);

  const [navigationActive, setNavigationActive] = useState(false);

  function setNavigation() {
    if (window.innerWidth < 900) {
      setNavigationActive(false);
    } else {
      setNavigationActive(true);
    }
  }

  useEffect(() => {
    setNavigation();
  });

  const handleResize = () => {
    setNavigation();
  };
  window.addEventListener("resize", handleResize);

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={navigationActive}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Navigation, Pagination]}
        autoHeight={true}
        className="mySwiper"
        breakpoints={{
          1290: {
            slidesPerView: 3,
          },
          830: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <Review userReview={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
