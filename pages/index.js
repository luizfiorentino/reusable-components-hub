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
      <ProgressBar progress={progress} />
      <div className={styles.buttonsDashboard}>
        <Button onClick={increaseProgress}>+</Button>
        <Button onClick={decreaseProgress}>-</Button>
      </div>
    </div>
  );
}
