import React from "react";
import styles from "./LabelSmall.module.css";
import { firaSans } from "@/styles/fonts";

export default function LabelSmall({
  children,
  variant = "primary",
  ...props
}) {
  return (
    <h4
      {...props}
      className={`${styles.labelContainer} ${styles[variant]} ${firaSans.className}`}
    >
      {children}
    </h4>
  );
}
