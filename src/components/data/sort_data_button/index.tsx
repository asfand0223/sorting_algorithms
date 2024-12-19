"use client";
import React from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { sortData } from "@/redux/dataReducer";

const SortDataButton = () => {
  const dispatch = useDispatch();
  const handleSortDataButtonClick = () => {
    dispatch(sortData());
  };
  return (
    <button className={styles.button} onClick={handleSortDataButtonClick}>
      Sort
    </button>
  );
};

export default SortDataButton;
