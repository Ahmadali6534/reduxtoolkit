import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 4 };
export const CounterSlice = createSlice({
 name: "counter",
 initialState,
 reducers: {
   increment: (state) => {
     state.value = state.value + 2;
   },
   decrement: (state) => {
     state.value = state.value - 1;
   },
   incrementByValue: (state, action) => {
     state.value = state.value + action.payload;
   },
   incrementByTypedValue: (state, action) => {
     state.value = state.value + action.payload;
   },
 },
});
export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;
