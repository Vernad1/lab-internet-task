import { useEffect, useState } from "react";

//TODO вынести интерфейс в другое место
export interface IValidations {
  minLength: number;
  inputType: "text" | "number";
}

export const useValidation = (value: string, validations: IValidations) => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (value) {
      setIsError(false);

      if (
        validations.inputType === "number" &&
        value.length < validations.minLength
      ) {
        setIsError(true);
        setErrorMessage("Невалидный номер");
        return;
      } else {
        setIsError(false);
      }

      // Проверка имени
      if (
        validations.inputType === "text" &&
        value.length < validations.minLength
      ) {
        setIsError(true);
        setErrorMessage(
          `Имя не может быть меньше ${validations.minLength} символов`
        );
        return;
      } else {
        setIsError(false);
      }
    } else {
      setIsError(true);
      setErrorMessage("Поле не может быть пустым");
    }
  }, [value]);

  return {
    isError,
    errorMessage,
  };
};
