import React from "react";
import styles from "./LabelSmall.module.css";

export default function LabelSmall({
  children,
  variant = "primary",
  ...props
}) {
  return (
    <h4 {...props} className={`${styles.labelContainer} ${styles[variant]}`}>
      {children}
    </h4>
  );
}
