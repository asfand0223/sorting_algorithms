import React from "react";

interface ISortStepProps {
  step: number[];
}

const SortStep: React.FC<ISortStepProps> = ({ step }) => {
  return (
    <>
      {step &&
        step.map((s, index) => (
          <span key={index} style={{ height: `${s}px` }}></span>
        ))}
    </>
  );
};

export default SortStep;
