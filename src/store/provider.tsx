"use client";

import "../i18n"; // ✅ ensures i18next is initialized before useTranslation()
import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "dayjs/locale/en"; // ✅ import locale for Day.js

import { store, persistor } from "@/store";
import AppTheme from "@/theme";
import ScrollToTop from "@/components/common/ScrollTop";
import ErrorBoundary from "@/components/error/ErrorBoundary";
import { useTranslation } from "react-i18next";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <InnerProviders>{children}</InnerProviders>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

function InnerProviders({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // ✅ Keep <html lang="xx"> in sync with selected language
    document.documentElement.lang = i18n.language;
    i18n.on("languageChanged", (lng) => {
      document.documentElement.setAttribute("lang", lng);
    });
    return () => {
      i18n.off("languageChanged");
    };
  }, [i18n]);

  return (
    <>
      <ScrollToTop />
      <AppTheme>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale={i18n.language === "ja" ? "ja" : "en"} // ✅ dynamic locale
          dateFormats={{
            keyboardDate: "YYYY/MM/DD",
          }}
        >
          {children}
        </LocalizationProvider>
      </AppTheme>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
