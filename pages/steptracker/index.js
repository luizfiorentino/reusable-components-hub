import ProgressBar from "@/components/StepTracker";
import React, { useState } from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";

export default function steptracker() {
  const [trackerMode, setTrackerMode] = useState(
    "purchase"
    //"Track the status of your purchase"
  );
  const [currentStep, setCurrentStep] = useState("Order Confirmed");

  const barSteps1 = [
    "Order Confirmed",
    "Dispatched",
    "Out for Delivery",
    "Delivered",
  ];

  const barSteps2 = [
    "Security",
    "Passport control",
    "Expected boarding",
    "Departure",
  ];
  //const currentStep = "Out for Delivery";
  const stepIndex =
    trackerMode === "purchase"
      ? barSteps1.indexOf(currentStep)
      : barSteps2.indexOf(currentStep);

  const handleCheckboxClick = (option) => {
    setTrackerMode(option);
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
            onClick={() => handleCheckboxClick("purchase")}
          />
          Purchase
        </label>
        <label>
          <input
            type="checkbox"
            checked={trackerMode === "flight departure"}
            onClick={() => handleCheckboxClick("flight departure")}
          />
          "Flight Departure"
        </label>
      </div>
    </div>
  );
}
