import React from "react";

interface ISortStepProps {
  step: number[];
}

const SortStep: React.FC<ISortStepProps> = ({ step }) => {
  return (
    <>
      {step &&
        step.map((s, index) => (
          <span
            key={index}
            style={{ height: `${s}%`, width: `${(1 / step.length) * 100}%` }}
          ></span>
        ))}
    </>
  );
};

export default SortStep;
