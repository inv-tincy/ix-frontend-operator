"use client";

import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { store, persistor } from "@/store";
import AppTheme from "@/theme";
import ScrollToTop from "@/components/common/ScrollTop";
import ErrorBoundary from "@/components/error/ErrorBoundary";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ScrollToTop />
          <AppTheme>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              adapterLocale="en"
              dateFormats={{
                keyboardDate: "YYYY/MM/DD", // recognized key
              }}
            >
              {children}
            </LocalizationProvider>
          </AppTheme>
          <ToastContainer position="top-right" autoClose={3000} />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}
