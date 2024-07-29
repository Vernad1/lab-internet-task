export interface IStore {
  questions: IQuestions[];
  reviewsItems: IReviewsItems[];
}

interface IQuestions {
  question: string;
  answer: string;
}

export interface IReviewsItems {
  id: number;
  userName: string;
  userCity: string;
  imageUrl: string;
  reviewText: string;
}
