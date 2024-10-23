import React from "react";
import styles from "./index.module.css";

export default function ProgressBar({
  percentage,
  className,
  variant = "primary",
}) {
  return (
    <div className={`${styles.mainContainer} ${styles[variant]}`}>
      <div className={styles.inner}></div>
    </div>
  );
}
