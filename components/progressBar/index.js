import React from "react";
import styles from "./index.module.css";

export default function ProgressBar({
  progress,
  className,
  variant = "primary",
  barSteps,
  currentStep,
}) {
  return (
    <div>
      {/* <div className={`${styles.mainContainer} ${styles[variant]}`}>
        <div
          className={styles.innerLeft}
          style={progress ? { width: `${progress}%` } : {}}
        ></div>

        <div className={styles.innerRight}></div>
      </div> */}
      {barSteps && (
        <div className={styles.progressSteps}>
          <div className={styles.progressStepsInner}>
            {barSteps.map((el) => (
              <div className={styles.progressItem}>
                <div className={styles.bubleContainer}>
                  <div
                    className={`${styles.buble} ${
                      currentStep === el && styles.selectedStep
                    }`}
                  ></div>
                </div>
                <p>{el}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
