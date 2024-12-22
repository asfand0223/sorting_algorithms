"use client";
import React, { useEffect } from "react";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import SortSteps from "./SortedData";
import { addSortingData } from "@/redux/sortDataReducer";
import SortMenu from "./SortMenu";
import SortButton from "./SortButton";
import ResetDataButton from "./ResetDataButton";
import styles from "./styles.module.scss";

const Data = () => {
  const { sortingData, isSorted } = useSelector(
    (state: RootState) => state.sortData,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    for (let i = 100; i > 0; i--) {
      dispatch(addSortingData({ data: Math.floor(Math.random() * 100) + 1 }));
    }
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.sortMenuContainer}>
          <SortMenu />
        </div>
        <div className={styles.sortAndResetDataButtonsContainer}>
          <SortButton />
          <ResetDataButton />
        </div>
        {!isSorted && (
          <div className={styles.data}>
            {sortingData.map((d, index) => (
              <span
                key={index}
                style={{
                  height: `${d}%`,
                  width: `${(1 / sortingData.length) * 100}%`,
                }}
              ></span>
            ))}
          </div>
        )}
        {isSorted && (
          <div className={styles.sortSteps}>
            <SortSteps />
          </div>
        )}
      </div>
    </div>
  );
};

export default Data;
