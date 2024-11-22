import ProgressBar from "@/components/StepTracker";
import React, { useState } from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";

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
    "Bag Drop",
    "Security",
    "Passport Control",
    "Expected Boarding",
    "Departure",
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
      <ProgressBar
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
      <div>
        <label>
          <input
            type="checkbox"
            checked={trackerMode === "purchase"}
            onClick={() => handleTrackerMode("purchase", barSteps1)}
          />
          Purchase
        </label>
        <label>
          <input
            type="checkbox"
            checked={trackerMode === "flight departure"}
            onClick={() => handleTrackerMode("flight departure", barSteps2)}
          />
          "Flight Departure"
        </label>
      </div>

      {barSteps?.map((el, index) => (
        <label>
          <input
            type="checkbox"
            checked={stepIndex === index}
            onClick={() => handleSelectStep(index)}
          />
          {el}
        </label>
      ))}
    </div>
  );
}
