import React from "react";
import style from "./review.module.css";
import defaultAvatar from "../../assets/images/reviews/default-avatar.svg";

interface ReviewProps {
  userReview: {
    id: number;
    userName: string;
    userCity: string;
    reviewText: string;
    imageUrl?: string;
  };
}

export const Review: React.FC<ReviewProps> = ({ userReview }) => {
  return (
    <div className={style.reviewsItem}>
      <div className={style.reviewInfo}>
        <div className={style.infoAvatar}>
          <img
            src={userReview.imageUrl ? userReview.imageUrl : defaultAvatar}
            alt="review-avatar"
          ></img>
        </div>
        <div className={style.reviewReviewer}>
          <div className={style.reviewerName}>{userReview.userName}</div>
          <div className={style.reviewerCity}>{userReview.userCity}</div>
        </div>
      </div>
      <div className={style.reviewText}>{userReview.reviewText}</div>
    </div>
  );
};
