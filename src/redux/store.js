import { configureStore } from "@reduxjs/toolkit";
import { timer } from "./timerReducer";

export const store = configureStore({
  reducer: {
    timer,
  },
});
