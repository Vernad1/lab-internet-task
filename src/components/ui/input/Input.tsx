import React from "react";
import style from "./input.module.css";

interface InputProps {
  placeHolder?: string;
  label: string;
  customstyle?: React.CSSProperties;
  formParams: {
    isError: boolean;
    errorMessage: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    isDirty: boolean;
    inputType: "text" | "number";
  };
}

export const Input: React.FC<InputProps> = ({
  formParams,
  label,
  placeHolder,
  customstyle,
}) => {
  return (
    <div
      className={style.inputContainer}
      style={customstyle ? customstyle : {}}
    >
      {formParams.isDirty && formParams.isError && (
        <p className={style.errorText}>{formParams.errorMessage}</p>
      )}
      <input
        type={formParams.inputType}
        name="name"
        className={style.input}
        placeholder={placeHolder ? placeHolder : ""}
        value={formParams.value}
        onChange={formParams.onChange}
        onBlur={formParams.onBlur}
      ></input>
      <label htmlFor="name">{label}</label>
    </div>
  );
};
