// src/store/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { store } from "./store"; // ✅ use named import instead of default
import userReducer from "@/features/user/userSlice";

const rootReducer = combineReducers({
    user: userReducer,
  // add reducers here if needed
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default rootReducer;
