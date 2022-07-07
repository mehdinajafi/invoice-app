import { configureStore } from "@reduxjs/toolkit";
import { loadState } from "./browser-storage";
import invoicesReducer from "./InvoicesSlice";
import themeReducer from "./ThemeSlice";

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    theme: themeReducer,
  },
  preloadedState: {
    theme: { value: loadState("theme") },
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
