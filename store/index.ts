import { configureStore } from "@reduxjs/toolkit";
import invoicesReducer from "./InvoicesSlice";

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
