import React from "react";
import styles from "./index.module.css";

export default function ProgressBar({
  progress,
  className,
  variant = "primary",
  barSteps,
  stepIndex,
}) {
  return (
    <div>
      {barSteps && (
        <div className={styles.progressSteps}>
          <div className={styles.progressStepsInner}>
            {barSteps.map((el, index) => (
              <div className={styles.progressItem}>
                <div className={styles.bubleContainer}>
                  <div
                    className={`${styles.buble} ${
                      stepIndex >= index && styles.selectedStep
                    }`}
                  ></div>
                </div>
                <p>{el}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className={styles.bar}>
        {barSteps.map((el, index) => (
          <div className={styles.stepsInner}>
            <div className={styles.streep}></div>
            <p className={styles.oneBubble}></p>
          </div>
        ))}
        <div className={styles.stepsInner}>
          {" "}
          <div className={styles.lastStreep}></div>
        </div>
      </div>
    </div>
  );
}

// Progress bar with plus and minus button
//  <div className={`${styles.mainContainer} ${styles[variant]}`}>
//         <div
//           className={styles.innerLeft}
//           style={progress ? { width: `${progress}%` } : {}}
//         ></div>

//         <div className={styles.innerRight}></div>
//       </div>
