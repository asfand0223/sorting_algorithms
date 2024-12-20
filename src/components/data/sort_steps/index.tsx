"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SortStep from "./sort_step";
import { useDispatch } from "react-redux";
import { setCurrentStep } from "@/redux/dataReducer";

const SortSteps = () => {
  const { sortSteps, currentStep } = useSelector(
    (state: RootState) => state.data,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const iterateSteps = async () => {
      for (let i = 0; i < sortSteps.length; i++) {
        dispatch(setCurrentStep({ currentStep: i }));
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };

    iterateSteps();
  }, []);
  return <SortStep step={sortSteps[currentStep]} />;
};

export default SortSteps;
