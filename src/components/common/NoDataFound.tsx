import { Box, Stack, SxProps } from "@mui/material";
import React, { FC } from "react";
import { NoDataSvgIcon } from "../UI/icons/Icon";
import { useTranslation } from "react-i18next";
import { MintTypography } from "@/design-system";
import { useTheme } from '@mui/material/styles';

interface INoDataFound {
  message: string;
  noDataProps?: {
    style?: SxProps;
    Icon?: any;
  };
}

const NoDataFound = ({ message, noDataProps }: INoDataFound) => {
  const { t } = useTranslation();
    const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        height: "320px",
        padding: "16px  40px 32px  40px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        alignSelf: "stretch",
        borderRadius: "var(--mm-radius-xl)",
        border: "1px solid var(--mm-border-low)",
        background: "var(--mm-background-container-bg)",
        ...(noDataProps?.style ? noDataProps?.style : {}),
      }}
    >
      <Stack alignItems={"center"} gap={"12px"}>
        {noDataProps?.Icon ? (
          <>{noDataProps?.Icon}</>
        ) : (
          <NoDataSvgIcon sx={{ width: "64px", height: "64px" }} />
        )}

        <MintTypography
          color={theme.mint.color.object.low}
          size="head-s"
          weight="400"
        >
          {t(message)}
        </MintTypography>
      </Stack>
    </Box>
  );
};

export default NoDataFound;
