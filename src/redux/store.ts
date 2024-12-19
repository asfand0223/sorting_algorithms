import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./dataReducer";

export const store = configureStore({
  reducer: { data: dataReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
