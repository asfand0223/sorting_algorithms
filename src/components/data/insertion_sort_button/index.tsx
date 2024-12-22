"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { insertionSortData } from "@/redux/dataReducer";
import styles from "./styles.module.scss";

const InsertionSortButton = () => {
  const dispatch = useDispatch();
  const handleSortDataButtonClick = () => {
    dispatch(insertionSortData());
  };
  return (
    <button className={styles.button} onClick={handleSortDataButtonClick}>
      INSERTION SORT
    </button>
  );
};

export default InsertionSortButton;
