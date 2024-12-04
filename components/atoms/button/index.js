import React from "react";
import styles from "./index.module.css";

export default function Button({
  children,
  variant = "primary",
  selected = false,
  ...props
}) {
  return (
    <button
      {...props}
      className={`${
        !selected ? styles.buttonContainer : styles.buttonContainerSelected
      } ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
