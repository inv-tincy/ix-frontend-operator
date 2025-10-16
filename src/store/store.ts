// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    // add other feature reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // adjust if you use non-serializable values from SDKs (e.g., Agora objects)
        ignoredActions: [],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

// types for hooks & components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
