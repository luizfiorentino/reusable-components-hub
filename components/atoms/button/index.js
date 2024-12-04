import React from "react";
import styles from "./index.module.css";

export default function Button({
  children,
  variant = "primary",
  selected = false,
  disabled = false,
  ...props
}) {
  return (
    <button
      {...props}
      className={`${
        !selected ? styles.buttonContainer : styles.buttonContainerSelected
      } ${styles[variant]}`}
      disabled={disabled === true ? disabled : false}
    >
      {children}
    </button>
  );
}
