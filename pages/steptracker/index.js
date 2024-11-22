import ProgressBar from "@/components/StepTracker";
import React, { useState } from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";
import StepTracker from "@/components/StepTracker";
import LabelMedium from "@/components/atoms/LabelMedium/LabelMedium";
import LabelSmall from "@/components/atoms/LabelSmall/LabelSmall";
import styles from "./index.module.css";

export default function steptracker() {
  const [trackerMode, setTrackerMode] = useState(
    "purchase"
    //"Track the status of your purchase"
  );

  const barSteps1 = [
    "Order Confirmed",
    "Dispatched",
    "Out for Delivery",
    "Delivered",
  ];

  const barSteps2 = [
    "Baggage Drop",
    "Security",
    "Passport Control",
    "Expected Boarding",
    "Departed",
  ];
  const [barSteps, setBarSteps] = useState(barSteps1);
  const [currentStep, setCurrentStep] = useState(barSteps[0]);
  const [stepIndex, setStepIndex] = useState(barSteps.indexOf(currentStep));
  //const currentStep = "Out for Delivery";
  // const stepIndex =
  //   trackerMode === "purchase"
  //     ? barSteps1.indexOf(currentStep)
  //     : barSteps2.indexOf(currentStep);

  const handleTrackerMode = (trackerMode, stepsOption) => {
    setStepIndex(0);
    setTrackerMode(trackerMode);
    setBarSteps(stepsOption);
  };

  const handleSelectStep = (index) => {
    console.log(barSteps[index]);
    setStepIndex(index);
    console.log("clicked", index);
  };

  return (
    <div>
      {/* Component's UX */}
      <div className={styles.componentUX}>
        <StepTracker
          label={
            trackerMode === "purchase"
              ? "Track the status of your purchase"
              : "Track the status of your departure"
          }
          icon={
            trackerMode === "purchase" ? (
              <MdOutlineLocalShipping />
            ) : (
              <FaPlaneDeparture />
            )
          }
          barSteps={trackerMode === "purchase" ? barSteps1 : barSteps2}
          stepIndex={stepIndex}
        />
      </div>
      {/* Usage Dashboard */}
      <div>
        <LabelMedium variant="cobaltBlue">Component mode</LabelMedium>
        <div className={styles.usageModeAndOptionsTop}>
          <LabelSmall variant="cobaltBlue">
            <input
              type="checkbox"
              checked={trackerMode === "purchase"}
              onClick={() => handleTrackerMode("purchase", barSteps1)}
            />
            Purchase
          </LabelSmall>
          <LabelSmall variant="cobaltBlue">
            <input
              type="checkbox"
              checked={trackerMode === "flight departure"}
              onClick={() => handleTrackerMode("flight departure", barSteps2)}
            />
            Flight Departure
          </LabelSmall>
        </div>
      </div>
      <LabelMedium variant="cobaltBlue">Step options</LabelMedium>
      {barSteps?.map((el, index) => (
        <LabelSmall variant="cobaltBlue">
          <input
            type="checkbox"
            checked={stepIndex === index}
            onClick={() => handleSelectStep(index)}
          />
          {el}
        </LabelSmall>
      ))}
    </div>
  );
}
