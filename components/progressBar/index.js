import React from "react";
import styles from "./index.module.css";

export default function ProgressBar({
  progress,
  className,
  variant = "primary",
  barSteps,
}) {
  return (
    <div>
      <div className={`${styles.mainContainer} ${styles[variant]}`}>
        <div
          className={styles.innerLeft}
          style={progress ? { width: `${progress}%` } : {}}
        ></div>

        <div className={styles.innerRight}></div>
      </div>
      {barSteps && (
        <div className={styles.progressSteps}>
          <div className={styles.progressStepsInner}>
            {barSteps.map((el) => (
              <p>{el}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
