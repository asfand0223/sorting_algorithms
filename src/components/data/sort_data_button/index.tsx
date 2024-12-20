"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { sortData } from "@/redux/dataReducer";
import styles from "./styles.module.scss";

const SortDataButton = () => {
  const dispatch = useDispatch();
  const handleSortDataButtonClick = () => {
    dispatch(sortData());
  };
  return (
    <button className={styles.button} onClick={handleSortDataButtonClick}>
      SORT
    </button>
  );
};

export default SortDataButton;
