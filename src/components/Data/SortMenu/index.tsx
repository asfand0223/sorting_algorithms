import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { SELECTED_SORT, setSelectedSort } from "@/redux/sortDataReducer";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";

const SortMenu = () => {
  const dispatch = useDispatch();
  const { selectedSort } = useSelector((state: RootState) => state.sortData);
  const handleSortSelect = (selectedSort: SELECTED_SORT) => {
    dispatch(setSelectedSort({ selectedSort }));
  };
  return (
    <>
      <button
        className={`${styles.button} ${selectedSort == SELECTED_SORT.MERGE ? styles.active : styles.inactive}`}
        onClick={() => handleSortSelect(SELECTED_SORT.MERGE)}
      >
        MERGE SORT
      </button>
      <button
        className={`${styles.button} ${selectedSort == SELECTED_SORT.QUICK ? styles.active : styles.inactive}`}
        onClick={() => handleSortSelect(SELECTED_SORT.QUICK)}
      >
        QUICK SORT
      </button>
      <button
        className={`${styles.button} ${selectedSort == SELECTED_SORT.INSERTION ? styles.active : styles.inactive}`}
        onClick={() => handleSortSelect(SELECTED_SORT.INSERTION)}
      >
        INSERTION SORT
      </button>
    </>
  );
};

export default SortMenu;
