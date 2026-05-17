import { createSlice } from "@reduxjs/toolkit";

// 1. State belirtmemiz gerekiyor (Context'teki gibi)
type CounterState = {
  value: number;
};

// 2. State'in başlangıç değeri belirtilir
const initialState: CounterState = {
  value: 42,
};

// 3. Slice tanımlanır. name, initialState, reducer tanımlamaları yapılır
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// 4. Actions, destructure yöntemiyle export edilir
export const { increment, decrement } = counterSlice.actions;
// 5. Reducer export edilir
export const counterReducer = counterSlice.reducer;
