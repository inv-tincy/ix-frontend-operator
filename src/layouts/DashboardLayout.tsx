"use client";

import { MintAppBar } from "@/design-system";
import { Box, CssBaseline } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import AppToolbar from "@/components/UI/app-bar/AppToolBar";
import AppSideBar from "@/components/UI/app-bar/AppSideBar";
import useToggle from "@/hooks/useToggle";

export default function DashboardLayout({ children }: any) {

  const theme = useTheme();
  const matches = useMediaQuery("(max-width:850px)");
  const [open, setOpen] = useState(!matches);
  const [logoutConfirmModal, toggleLogoutConfirmModal] = useToggle();

  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }
  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
    open?: boolean;
  }>(({ theme, open }) => ({
    height: "100vh",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.mint.color.background.uiBackground,
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${theme.mint.drawerWidth}px`,
    ...(open && {
      width: `calc(100% - ${theme.mint.drawerWidth}px)`,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }));

  const AppBar = styled(MintAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${theme.mint.drawerWidth}px)`,
      marginLeft: `${theme.mint.drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  return (<>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <AppToolbar
          appName="dashboard.header"
          hasMenuButton
          hasAppBarActions
        />

      </AppBar>
      <AppSideBar handleLogout={toggleLogoutConfirmModal} open={open} />
      <Main open={open} id="main-container">
        <DrawerHeader
          sx={{
            height: theme.mint.appBarHeight,
            minHeight: theme.mint.appBarHeight,
            [theme.breakpoints.up("xs")]: {
              minHeight: theme.mint.appBarHeight,
            },
          }}
        />
        <Box p={theme.mint.spacing.xl} flexGrow={1}>
          {children}
        </Box>
      </Main>
    </Box>
  </>);

}