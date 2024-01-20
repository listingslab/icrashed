import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import icrashedReducer from "./reducer";

export const store = configureStore({
  reducer: {
    icrashed: icrashedReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
