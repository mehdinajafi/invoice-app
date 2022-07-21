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
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import invoicesReducer from "./InvoicesSlice";
import themeReducer from "./ThemeSlice";

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  theme: themeReducer,
});
type RootReducer = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: persistReducer<RootReducer, any>(
    {
      key: "root",
      version: 1,
      storage,
      whitelist: ["theme"],
    },
    rootReducer
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
