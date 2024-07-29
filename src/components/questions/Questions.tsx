import React from "react";
import style from "./questions.module.css";
import { Accordion } from "../accordion/Accordion";
import { useAppSelector } from "../../store/store";

export const Questions: React.FC = () => {
  const questions = useAppSelector((state) => state.content.questions);
  return (
    <section className={style.questions} id="questions">
      <div className={style.container}>
        <h2 className={style.questionsTittle}>Вопросы и ответы</h2>
        {questions.map((question) => (
          <Accordion
            text={question.answer}
            title={question.question}
          ></Accordion>
        ))}
      </div>
    </section>
  );
};
