import React from "react";
import styles from "./LabelMedium.module.css";

export default function LabelMedium({
  children,
  variant = "primary",
  ...props
}) {
  return (
    <h2 {...props} className={`${styles.labelContainer} ${styles[variant]}`}>
      {children}
    </h2>
  );
}

// export default function Button({ children, variant = "primary", ...props }) {
//     return (
//       <button
//         {...props}
//         className={`${styles.buttonContainer} ${styles[variant]}`}
//       >
//         {children}
//       </button>
//     );
//   }
