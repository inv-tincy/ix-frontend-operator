import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import rootReducer from "./rootReducer";

const DEBUG = process.env.NODE_ENV !== "production";

// Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], // only persist the slices you need
  stateReconciler: autoMergeLevel2,
  version: 1,
};

// Reset state on sign out action
const rootReducerWithReset = (state: any, action: any) => {
  if (action.type === "SIGN_OUT") {
    state = undefined;
  }
  return (rootReducer as any)(state, action);
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducerWithReset);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
  devTools: DEBUG,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
