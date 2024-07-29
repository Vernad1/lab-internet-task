import React, { ChangeEventHandler } from "react";
import style from "./checkbox.module.css";

interface CheckboxProps {
  checked: boolean;
  toggleCheckbox: ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  toggleCheckbox,
}) => {
  return (
    <div className={style.container}>
      <input
        checked={checked}
        className={style.checkbox}
        onChange={toggleCheckbox}
        type="checkbox"
        id="checkbox"
      ></input>
      <label htmlFor="checkbox">Я соглашаюсь</label>
    </div>
  );
};
