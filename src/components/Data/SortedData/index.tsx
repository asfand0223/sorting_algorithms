"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import {
  setCurrentStep,
  setisResettable,
  setIsSortable,
} from "@/redux/sortDataReducer";

const SortedData = () => {
  const { sortedData, currentStep } = useSelector(
    (state: RootState) => state.sortData,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const iterateSteps = async () => {
      dispatch(setIsSortable({ isSortable: false }));
      for (let i = 0; i < sortedData.length; i++) {
        dispatch(setCurrentStep({ currentStep: i }));
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      dispatch(setisResettable({ isResettable: true }));
    };

    iterateSteps();
  }, []);
  return (
    <>
      {sortedData[currentStep].map((d, index) => {
        return (
          <span
            key={index}
            style={{
              height: `${d}%`,
              width: `${(1 / sortedData[currentStep].length) * 100}%`,
            }}
          ></span>
        );
      })}
    </>
  );
};

export default SortedData;
