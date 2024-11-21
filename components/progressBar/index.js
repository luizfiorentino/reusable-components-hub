import React from "react";
import styles from "./index.module.css";
import { IoMdCheckboxOutline } from "react-icons/io";
import { ImCheckboxUnchecked } from "react-icons/im";
import LabelMedium from "../atoms/LabelMedium/LabelMedium";
import LabelSmall from "../atoms/LabelSmall/LabelSmall";

export default function ProgressBar({
  variant = "primary",
  label,
  icon,
  barSteps,
  stepIndex,
}) {
  return (
    <div>
      {label && (
        <div className={styles.labelAndIcon}>
          <LabelMedium>{label}</LabelMedium>
          {icon && <div className={styles.iconContainer}>{icon}</div>}
        </div>
      )}
      <div className={styles.bar}>
        {barSteps.map((el, index) => (
          <div className={styles.stepsInner}>
            <div
              className={
                stepIndex >= index ? styles.stripeBold : styles.stripeLight
              }
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
                  ? styles.stripeBold
                  : styles.stripeLight
              }
            ></div>
          </div>
        ))}
      </div>
      <div className={styles.text}>
        {barSteps.map((el, index) => (
          <div className={`${styles.stepsInnerText} ${styles.textInner}`}>
            <LabelSmall variant="flatHight">{el}</LabelSmall>
          </div>
        ))}
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

// V1 of the progress bar
// {barSteps && (
//   <div className={styles.progressSteps}>
//     <div className={styles.progressStepsInner}>
//       {barSteps.map((el, index) => (
//         <div className={styles.progressItem}>
//           <div className={styles.bubleContainer}>
//             <div
//               className={`${styles.buble} ${
//                 stepIndex >= index && styles.selectedStep
//               }`}
//             ></div>
//           </div>
//           <p>{el}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// )}
