import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../Features/CounterSlice";

export const Store = configureStore({
      reducer:{counter:CounterSlice}
})