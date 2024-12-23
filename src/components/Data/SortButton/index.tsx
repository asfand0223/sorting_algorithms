import {
  insertionSortData,
  mergeSortData,
  quickSortData,
  SELECTED_SORT,
} from "@/redux/sortDataReducer";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

const SortButton = () => {
  const { isSortable } = useSelector((state: RootState) => state.sortData);
  const dispatch = useDispatch();
  const { selectedSort } = useSelector((state: RootState) => state.sortData);
  const handleSortButtonClick = () => {
    switch (selectedSort) {
      case SELECTED_SORT.MERGE:
        dispatch(mergeSortData());
        break;
      case SELECTED_SORT.QUICK:
        dispatch(quickSortData());
        break;
      case SELECTED_SORT.INSERTION:
        dispatch(insertionSortData());
        break;
      default:
        break;
    }
  };
  return (
    <button
      className={`${styles.button} ${!isSortable ? styles.disabled : ""}`}
      onClick={handleSortButtonClick}
      disabled={!isSortable}
    >
      SORT
    </button>
  );
};

export default SortButton;
