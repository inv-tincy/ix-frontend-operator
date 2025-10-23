"use client";
import { useTranslation } from "react-i18next";
import { Box, useTheme } from "@mui/material";
import React from "react";
import { MintAppBar } from "@/design-system";
import AppToolbar from "@/components/UI/app-bar/AppToolBar";


interface Props {
  children: React.ReactNode;
}

const AuthenticationLayout: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  const { t } = useTranslation(); // <-- get t function

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      {/* Top App Bar */}
      <MintAppBar position="static">
        <AppToolbar appName={t("dashboard.header")} />
      </MintAppBar>

      {/* Content area */}
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: theme.palette.background.default,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: theme.spacing(4),
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={theme.spacing(3)}
          width="400px"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AuthenticationLayout;
