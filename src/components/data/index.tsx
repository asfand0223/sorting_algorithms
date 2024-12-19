"use client";
import React, { useEffect } from "react";
import SortDataButton from "./sort_data_button";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "@/redux/dataReducer";
import styles from "./styles.module.scss";

const Data = () => {
  const { data } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    for (let i = 10; i > 0; i--) {
      dispatch(addData({ data: i }));
    }
  }, []);
  return (
    <div className={styles.container}>
      <SortDataButton />
      <div className={styles.data}>
        {data.map((d, index) => (
          <span key={index}>{d} </span>
        ))}
      </div>
    </div>
  );
};

export default Data;
