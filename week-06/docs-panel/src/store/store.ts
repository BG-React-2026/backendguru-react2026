import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { counterReducer } from "../features/counter/counterSlice";
import { todoApi } from "../services/todoApi";
import { baseApi } from "../services/baseApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  // Logger falan da olur
  // Tüm action'ları burası dinler ve sonraki reducer'a iletir
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
  // .concat(redux-logger)
  // .concat(auth-biseyler)
  // .concat(local-store-persist)
});

// Store'daki Global State'in tipidir
export type RootState = ReturnType<typeof store.getState>;
// Store'a gelecek olan action'ların tipini belirtir
export type AppDispatch = typeof store.dispatch;
// useDispatch hook'unu tiplendiriyoruz
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// Store'u dinleyen selector'ü de tiplendiriyoruz
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
