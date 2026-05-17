import { configureStore } from "@reduxjs/toolkit";
import documentsReducer from "../features/documents/documentsSlice";

export const store = configureStore({
  reducer: {
    documents: documentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
