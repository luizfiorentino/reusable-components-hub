import React from "react";
import styles from "./index.module.css";
import { IoMdCheckboxOutline } from "react-icons/io";
import { ImCheckboxUnchecked } from "react-icons/im";
import { IoCheckbox } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

export default function ProgressBar({
  progress,
  className,
  variant = "primary",
  barSteps,
  stepIndex,
}) {
  console.log(stepIndex, barSteps.length);
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
            <div
              className={stepIndex >= index ? styles.streep : styles.light}
            ></div>
            <div
              className={
                stepIndex >= index ? styles.boldBubble : styles.lightBubble
              }
            >
              {stepIndex >= index ? (
                <div className={styles.innerIconBold}>
                  <IoMdCheckboxOutline />
                </div>
              ) : (
                <div className={styles.innerIconLight}>
                  <ImCheckboxUnchecked />
                </div>
              )}
            </div>
            <div
              className={
                stepIndex - 1 >= index ||
                (stepIndex === barSteps.length - 1 &&
                  index === barSteps.length - 1)
                  ? styles.streep
                  : styles.light
              }
            ></div>
          </div>
        ))}
        {/* <div className={styles.stepsInner}>
          {" "}
          <div className={styles.lastStreep}></div>
        </div> */}
      </div>
      <div className={styles.text}>
        {barSteps.map((el, index) => (
          <div className={styles.stepsInnerText}>
            <div className={styles.textInner}>{el}</div>
          </div>
        ))}
        {/* <div className={styles.stepsInner}>
          {" "}
          <div className={styles.lastStreep}></div>
        </div> */}
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
