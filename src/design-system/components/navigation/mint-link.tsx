import { Box, BoxProps, SxProps, useTheme } from "@mui/material";
import React from "react";

import { useRouter } from "next/navigation";
import { MintTypography } from "../input/mint-typography";
import { ArrowLeftOutlinedIcon, UnderLineIcon } from "@/design-system";

export function MintLink({
  path,
  sx,
  StartIcon,
  EndIcon,
  shoIcon,
  underLined = true,
  children,
  props,
  onClick,
  hideEndIcon,
  hideStartIcon,
}: Readonly<{
  path?: string;
  sx?: SxProps;
  StartIcon?: any;
  EndIcon?: any;
  shoIcon?: boolean;
  underLined?: boolean;
  children?: any;
  onClick?: () => void;
  props?: BoxProps & {
    "data-testid": string;
  };
  hideEndIcon?: boolean;
  hideStartIcon?: boolean;
}>) {
  const navigate = useRouter();
  const theme = useTheme();
  const onNavigate = () => {
    const isExternal = path?.startsWith("http");
    if (isExternal) {
      window.open(path, "_blank");
    } else if (onClick) {
      onClick();
    } else if (path) {
      navigate.push(path);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: "4px",
        width: "fit-content",
        "&:hover": {
          cursor: "pointer",
        },
        ...sx,
      }}
      onClick={onNavigate}
      data-testid="back-button"
      {...props}
    >
      <Box
        className="mint-link-startIcon"
        display={"flex"}
        alignItems={"center"}
      >
        {shoIcon && !hideStartIcon && (
          <>
            {StartIcon || (
              <ArrowLeftOutlinedIcon
                color={theme.mint.color.object.link}
                size={16}
              />
            )}
          </>
        )}
      </Box>

      <Box position={"relative"}>
        <MintTypography
          size="body"
          weight="400"
          lineHeight={"150%"}
          color={theme.mint.color.text.link}
        >
          {children}
        </MintTypography>

        {underLined && (
          <Box position={"absolute"} bottom={"-8px"}>
            <UnderLineIcon width={"100%"} />
          </Box>
        )}
      </Box>
      {shoIcon && EndIcon && !hideEndIcon && EndIcon}
    </Box>
  );
}
