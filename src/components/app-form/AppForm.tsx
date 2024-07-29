import React, { FormEvent, useState } from "react";
import style from "./appForm.module.css";
import { useInput } from "../../hooks/useInput";
import { Input } from "../ui/input/Input";
import { Button } from "../ui/button/Button";
import { Checkbox } from "../ui/checkbox/Checkbox";
import { sendForm } from "../../api/sendForm";

export const AppForm: React.FC = () => {
  const formName = useInput("", { inputType: "text", minLength: 3 });
  const formPhone = useInput("", { inputType: "number", minLength: 11 });

  const [isConfirm, setIsConfirm] = useState(false);

  function toggleConfirm() {
    setIsConfirm((prev) => !prev);
  }

  function formSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendForm({ name: formName.value, phoneNumber: Number(formPhone.value) })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <section className={style.form} id="appForm">
      <div className={style.formTitle}>Отправь форму</div>
      <form onSubmit={formSubmit} action={style.submit}>
        <div className={style.inputs}>
          <Input formParams={formName} label="Имя" />
          <Input formParams={formPhone} label="Номер" />
        </div>
        <div className={style.inputs}>
          <div className={style.inputsInner}>
            <Checkbox
              toggleCheckbox={toggleConfirm}
              checked={isConfirm}
            ></Checkbox>
          </div>
          <div className={style.inputsInner}>
            <Button
              disabled={!isConfirm || formName.isError || formPhone.isError}
              customstyle={{ width: "100%" }}
              variant="primary"
            >
              Отрпавить
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};
