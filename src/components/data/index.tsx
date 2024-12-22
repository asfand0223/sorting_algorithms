"use client";
import React, { useEffect } from "react";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "@/redux/dataReducer";
import SortSteps from "./sort_steps";
import MergeSortButton from "./merge_sort_button";
import styles from "./styles.module.scss";
import QuickSortButton from "./quick_sort_button";
import InsertionSortButton from "./insertion_sort_button";

const Data = () => {
  const { data, sorted } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    for (let i = 100; i > 0; i--) {
      dispatch(addData({ data: Math.floor(Math.random() * 100) + 1 }));
    }
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.buttons}>
          <MergeSortButton />
          <QuickSortButton />
          <InsertionSortButton />
        </div>
        {!sorted && (
          <div className={styles.data}>
            {data.map((d, index) => (
              <span
                key={index}
                style={{
                  height: `${d}%`,
                  width: `${(1 / data.length) * 100}%`,
                }}
              ></span>
            ))}
          </div>
        )}
        {sorted && (
          <div className={styles.sortSteps}>
            <SortSteps />
          </div>
        )}
      </div>
    </div>
  );
};

export default Data;
