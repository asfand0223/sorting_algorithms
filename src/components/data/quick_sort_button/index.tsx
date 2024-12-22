"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { quickSortData } from "@/redux/dataReducer";
import styles from "./styles.module.scss";

const QuickSortButton = () => {
  const dispatch = useDispatch();
  const handleSortDataButtonClick = () => {
    dispatch(quickSortData());
  };
  return (
    <button className={styles.button} onClick={handleSortDataButtonClick}>
      QUICK SORT
    </button>
  );
};

export default QuickSortButton;
