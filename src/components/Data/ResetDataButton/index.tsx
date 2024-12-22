import React from "react";
import { useDispatch } from "react-redux";
import { resetData } from "@/redux/sortDataReducer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import styles from "./styles.module.scss";

const ResetDataButton = () => {
  const dispatch = useDispatch();
  const { isVisualised } = useSelector((state: RootState) => state.sortData);
  const handleResetDataButtonClick = () => {
    dispatch(resetData());
  };

  return (
    <button
      className={`${styles.button} ${!isVisualised ? styles.disabled : ""}`}
      onClick={handleResetDataButtonClick}
      disabled={!isVisualised}
    >
      RESET
    </button>
  );
};

export default ResetDataButton;
