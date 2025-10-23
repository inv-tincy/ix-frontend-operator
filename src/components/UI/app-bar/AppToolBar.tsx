import {
  BellIcon,
  DocumentOutlinedIcon,
  MacromillServiceLogo,
  MenuOutlinedIcon,
  MintIconButton,
  MintTypography,
  PlusOutlinedIcon,
  TicketOutlinedIcon,
} from "@/design-system";
// import { RootState } from "@/stores/rootReducer";
import { Badge, Box, Stack, Toolbar, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function AppToolbar({
  handleMenuBarToggle,
  appName,
  hasMenuButton = false,
  hasAppBarActions = false,
  onHeaderClick,
  isUserActive = false,
  ticketInfo,
  appActionClick,
}: {
  handleMenuBarToggle?: () => void;
  appName: string;
  hasMenuButton?: boolean;
  hasAppBarActions?: boolean;
  onHeaderClick?: () => void;
  isUserActive?: boolean;
  ticketInfo?: {
    availableTickets: number;
    lockedTickets: number;
    unlockedTickets: number;
  };
  appActionClick?: () => void;
}) {
  const theme = useTheme();
  const router = useRouter();
  const { t } = useTranslation();
  const onRedirectHome = () => {
    if (onHeaderClick) {
      onHeaderClick();
    }
  };
  const goToNotification = () => {
    router.push("/app/home/notification");
  };
  const goToUserBasicGuide = () => {
    router.push("/app/user-guide/basic-guide");
  };
//   const isUnreadExist = useSelector(
//     (state: RootState) => state.campaign.isUnreadExist
//   );

  return (
    <Toolbar
      sx={{
        height: theme.mint.appBarHeight,
        minHeight: theme.mint.appBarHeight,
        [theme.breakpoints.up("xs")]: {
          minHeight: theme.mint.appBarHeight,
          paddingX: theme.mint.spacing.s,
        },
        borderBottom: "2px solid transparent",
        borderImage: "linear-gradient(45deg,#05A0ED,#7690C1,#F27E91)",
        borderImageSlice: "1",
      }}
    >
      <Stack
        justifyContent={"space-between"}
        flexDirection={"row"}
        flexGrow={1}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={theme.mint.spacing.xxs}
        >
          {hasMenuButton && (
            <MintIconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuBarToggle}
              data-testid="menu-bar"
              disableRipple
              sx={{
                fontFamily: '"Noto Sans JP", sans-serif',
                padding: "10px 8px",
              }}
            >
              <MenuOutlinedIcon
                color={theme.mint.color.object.fixedWhite}
                size={24}
              />
            </MintIconButton>
          )}

          <Box
            display={"flex"}
            gap={`${theme.mint.spacing.xxs}`}
            onClick={onRedirectHome}
            sx={{
              cursor: isUserActive ? "pointer" : "default",
            }}
          >
            <MacromillServiceLogo />
            <MintTypography size="head-m" weight="800">
              {t(appName)}
            </MintTypography>
          </Box>
        </Box>
        {hasAppBarActions && (
          <Box
            display={"flex"}
            gap={theme.mint.spacing.m}
            alignItems={"center"}
          >
            <Box
              sx={{
                display: "flex",
                padding: theme.mint.spacing.xxs,
                justifyContent: "space-between",
                gap: theme.mint.spacing.xxs,
                alignItems: "center",
                borderRadius: `${theme.mint.cornerRadius.s}px`,
                backgroundColor: theme.mint.color.surfaceAccent.primary.bright,
                cursor: "pointer",
              }}
              data-testid="app-actions-1"
              onClick={goToUserBasicGuide}
            >
              <DocumentOutlinedIcon color={theme.mint.color.object.accent} />
              <MintTypography
                color={theme.mint.color.object.accent}
                weight="700"
              >
                {t("dashboard.navdata.user-guide-head")}
              </MintTypography>
            </Box>

            <Box
              sx={{
                display: "flex",
                padding: "4px 8px",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: `${theme.mint.cornerRadius.s}px`,
                backgroundColor: theme.mint.color.surfaceAccent.primary.bright,
                cursor: "pointer",
                gap: theme.mint.spacing.xs,
              }}
              onClick={appActionClick}
              data-testid="app-actions"
            >
              <Box
                display={"flex"}
                gap={theme.mint.spacing.xxs}
                alignItems={"center"}
              >
                <TicketOutlinedIcon color={theme.mint.color.text.accent} />
                <MintTypography
                  weight="700"
                  color={theme.mint.color.text.accent}
                >
                  {t("dashboard.navdata.ticket")}
                </MintTypography>
                <MintTypography
                  weight="700"
                  size="head-xs"
                  color={theme.mint.color.text.high}
                >
                  {ticketInfo?.availableTickets ?? 0}
                </MintTypography>
              </Box>

              <Box>
                <MintIconButton
                  sx={{
                    fontFamily: '"Noto Sans JP", sans-serif',
                    backgroundColor:
                      theme.mint.color.surfaceAccent.primary.primary,
                    "&:hover": {
                      backgroundColor:
                        theme.mint.color.surfaceAccent.primary.primary,
                    },
                  }}
                >
                  <PlusOutlinedIcon
                    color={theme.mint.color.object.fixedWhite}
                    size={16}
                  />
                </MintIconButton>
              </Box>
            </Box>
            <Badge
              onClick={goToNotification}
              badgeContent={""}
              color="error"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
                "& .MuiBadge-badge": {
                  height: "8px",
                  minWidth: "8px",
                  width: "8px",
                  padding: 0,
                  top: "7px",
                  right: "4px"
                },
              }}
            >
              <BellIcon color={theme.mint.color.object.fixedWhite} />
            </Badge>
          </Box>
        )}
      </Stack>
    </Toolbar>
  );
}
