import React from "react";
import styles from "./LabelMedium.module.css";
import { firaSans } from "@/styles/fonts";

export default function LabelMedium({
  children,
  variant = "primary",
  ...props
}) {
  return (
    <h2
      {...props}
      className={`${styles.labelContainer} ${styles[variant]} ${firaSans.className}`}
    >
      {children}
    </h2>
  );
}
