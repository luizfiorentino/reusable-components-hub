import React from "react";
import styles from "./index.module.css";

export default function Button({ children, variant = "primary", ...props }) {
  return (
    <button
      {...props}
      className={`${styles.buttonContainer} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
