import React from "react";
import { useDispatch } from "react-redux";
import { resetData } from "@/redux/sortDataReducer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import styles from "./styles.module.scss";

const ResetDataButton = () => {
  const dispatch = useDispatch();
  const { isResettable } = useSelector((state: RootState) => state.sortData);
  const handleResetDataButtonClick = () => {
    dispatch(resetData());
  };

  return (
    <button
      className={`${styles.button} ${!isResettable ? styles.disabled : ""}`}
      onClick={handleResetDataButtonClick}
      disabled={!isResettable}
    >
      RESET
    </button>
  );
};

export default ResetDataButton;
