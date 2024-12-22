"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { mergeSortData } from "@/redux/dataReducer";
import styles from "./styles.module.scss";

const MergeSortButton = () => {
  const dispatch = useDispatch();
  const handleSortDataButtonClick = () => {
    dispatch(mergeSortData());
  };
  return (
    <button className={styles.button} onClick={handleSortDataButtonClick}>
      MERGE SORT
    </button>
  );
};

export default MergeSortButton;
