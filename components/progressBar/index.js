import React from "react";
import styles from "./index.module.css";

export default function ProgressBar({
  progress,
  className,
  variant = "primary",
}) {
  return (
    <div className={`${styles.mainContainer} ${styles[variant]}`}>
      <div
        className={styles.innerLeft}
        style={progress ? { width: `${progress}%` } : {}}
      ></div>
      <div className={styles.innerRight}></div>
    </div>
  );
}
