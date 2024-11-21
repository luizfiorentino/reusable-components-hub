import React, { useState } from "react";
import styles from "./index.module.css";
import ProgressBar from "@/components/progressBar";
import Button from "@/components/atoms/button";
import Card from "@/components/card";
import Pagination from "@/components/pagination";

export default function index() {
  const [progress, setProgress] = useState(50);
  const numberOfCards = 10;
  const increaseProgress = () => progress <= 90 && setProgress(progress + 10);
  const decreaseProgress = () => progress >= 10 && setProgress(progress - 10);

  const barSteps = [
    "payment confirmed",
    "product sent to shipping",
    "on its way",
    "product delivered",
  ];
  const currentStep = "on its way";
  const stepIndex = barSteps.indexOf(currentStep);

  const cardList = [...Array(numberOfCards)];
  console.log(cardList);
  return (
    <div>
      <h1>Hello mottocode</h1>
      <div className={styles.progressBar}>
        <ProgressBar
          label="Track the status of your purchase"
          progress={progress}
          barSteps={barSteps}
          stepIndex={stepIndex}
        />
      </div>
      {/* <div className={styles.buttonsDashboard}>
        <Button onClick={decreaseProgress}>-</Button>
        <Button onClick={increaseProgress}>+</Button>
      </div> */}
      {/* <Pagination /> */}
      {/* {cardList.map((_, i) => (
        <div key={i} className={styles.card}>
          <Card />
        </div>
      ))} */}
    </div>
  );
}
