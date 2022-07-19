import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistState,
} from "redux-persist";
import { PersistPartial } from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import invoicesReducer from "./InvoicesSlice";
import themeReducer from "./ThemeSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["theme"],
};

export const store = configureStore({
  reducer: persistReducer(
    {
      key: "root",
      version: 1,
      storage,
      whitelist: ["theme"],
    },
    combineReducers({ invoices: invoicesReducer, theme: themeReducer })
  ),
  middleware: (getDefaultMiddleware: any) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
