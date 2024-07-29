import React, { ReactNode } from "react";
import style from "./button.module.css";

interface ButtonProps {
  children: ReactNode;
  variant: "primary" | "secondary";
  customstyle?: React.CSSProperties;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  customstyle,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      style={customstyle ? customstyle : {}}
      className={`${style[variant]}  ${disabled ? style.disabled : ""}`}
    >
      {children}
    </button>
  );
};
