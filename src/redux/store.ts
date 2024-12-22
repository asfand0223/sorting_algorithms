import { configureStore } from "@reduxjs/toolkit";
import { sortDataReducer } from "./sortDataReducer";

export const store = configureStore({
  reducer: { sortData: sortDataReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
