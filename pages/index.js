import React, { useState } from "react";
import ProgressBar from "@/components/progressBar";

export default function index() {
  const [progress, setProgress] = useState(50);
  return (
    <div>
      <h1>Hello mottocode</h1>
      <ProgressBar progress={progress} />
      <button onClick={() => progress <= 90 && setProgress(progress + 10)}>
        +
      </button>
      <button onClick={() => progress >= 10 && setProgress(progress - 10)}>
        -
      </button>
    </div>
  );
}
