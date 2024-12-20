"use client";
import React, { useEffect } from "react";
import SortDataButton from "./sort_data_button";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "@/redux/dataReducer";
import styles from "./styles.module.scss";
import SortSteps from "./sort_steps";

const Data = () => {
  const { data, sorted } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    for (let i = 10; i > 0; i--) {
      dispatch(addData({ data: i }));
    }
  }, []);
  return (
    <div className={styles.container}>
      <SortDataButton />
      {!sorted && (
        <div className={styles.data}>
          {data.map((d, index) => (
            <span key={index}>{d} </span>
          ))}
        </div>
      )}
      {sorted && (
        <div className={styles.sortSteps}>
          <SortSteps />
        </div>
      )}
    </div>
  );
};

export default Data;
