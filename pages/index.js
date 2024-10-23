import React, { useState } from "react";
import styles from "./index.module.css";
import ProgressBar from "@/components/progressBar";
import Button from "@/components/atoms/button";

export default function index() {
  const [progress, setProgress] = useState(50);
  const increaseProgress = () => progress <= 90 && setProgress(progress + 10);
  const decreaseProgress = () => progress >= 10 && setProgress(progress - 10);
  return (
    <div>
      <h1>Hello mottocode</h1>
      <div className={styles.progressBar}>
        <ProgressBar progress={progress} />
      </div>

      <div className={styles.buttonsDashboard}>
        <Button onClick={decreaseProgress}>-</Button>
        <Button onClick={increaseProgress}>+</Button>
      </div>
    </div>
  );
}
