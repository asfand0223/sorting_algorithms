"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SortStep from "./sort_step";

const SortSteps = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const { sortSteps } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    const iterateSteps = async () => {
      for (let i = 0; i < sortSteps.length; i++) {
        setCurrentStep(i);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };

    iterateSteps();
  }, []);
  return <SortStep step={sortSteps[currentStep]} />;
};

export default SortSteps;
