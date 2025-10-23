import React from "react";
import { Button, ButtonProps, styled } from "@mui/material";

interface IMintStickerButtonProps extends ButtonProps {}
export function MintStickerButton(props: IMintStickerButtonProps) {
  const newProps = { ...props };
  if (!newProps.variant) {
    newProps.variant = "contained";
  }
  return (
    <ButtonStyled disableRipple {...newProps}>
      {props.children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled(Button)(({ theme }) => ({
  "&.MuiButton-root": {
    display: "flex",
    height: "28px",
    padding: "4px 8px",
    alignItems: "center",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "100%",
    gap: "4px",
    minWidth: "auto",
    borderRadius: "4px",
    boxShadow: "none",
    ".MuiButton-startIcon": {
      margin: 0,
    },
    "&.MuiButton-containedRed": {
      backgroundColor: `${theme.mint.color.pallet.red500}`,
      " &:hover": {
        backgroundColor: `${theme.mint.color.pallet.red500}`,
      },
      "&:active": {
        backgroundColor: `${theme.mint.color.pallet.red500}`,
      },
    },
    "&.MuiButton-outlinedRed": {
      border: `1px solid ${theme.mint.color.pallet.red500}`,
      background: theme.mint.color.background.containerBg.layer1,
      " &:hover": {
        border: `1px solid ${theme.mint.color.pallet.red500}`,
        background: theme.mint.color.background.containerBg.layer1,
      },
      "&:active": {
        border: `1px solid ${theme.mint.color.pallet.red500}`,
        background: theme.mint.color.background.containerBg.layer1,
      },
    },
    "&.MuiButton-tonalRed": {
      background: theme.mint.color.pallet.redBrilliant300,
      color: theme.mint.color.pallet.red700,
      "&:hover": {
        background: theme.mint.color.pallet.redBrilliant300,
      },
      "&:active": {
        background: theme.mint.color.pallet.redBrilliant300,
      },
    },
    "&.MuiButton-containedTeal": {
      background: theme.mint.color.pallet.teal500,
      " &:hover": {
        background: theme.mint.color.pallet.teal500,
      },
      "&:active": {
        background: theme.mint.color.pallet.teal500,
      },
    },
    "&.MuiButton-outlinedTeal": {
      border: `1px solid ${theme.mint.color.pallet.teal500}`,
      background: theme.mint.color.background.containerBg.layer1,
      color: theme.mint.color.pallet.teal500,
      " &:hover": {
        border: `1px solid ${theme.mint.color.pallet.teal500}`,
        background: theme.mint.color.background.containerBg.layer1,
        color: theme.mint.color.pallet.teal500,
      },
      "&:active": {
        border: `1px solid ${theme.mint.color.pallet.teal500}`,
        background: theme.mint.color.background.containerBg.layer1,
        color: theme.mint.color.pallet.teal500,
      },
    },
    "&.MuiButton-tonalTeal": {
      background: theme.mint.color.pallet.tealBrilliant300,
      color: theme.mint.color.pallet.teal700,
      " &:hover": {
        background: theme.mint.color.pallet.tealBrilliant300,
        color: theme.mint.color.pallet.teal700,
      },
      "&:active": {
        background: theme.mint.color.pallet.tealBrilliant300,
        color: theme.mint.color.pallet.teal700,
      },
    },
    "&.MuiButton-containedYellow": {
      background: theme.mint.color.pallet.yellow500,
      " &:hover": {
        background: theme.mint.color.pallet.yellow500,
      },
      "&:active": {
        background: theme.mint.color.pallet.yellow500,
      },
    },
    "&.MuiButton-outlinedYellow": {
      border: `1px solid ${theme.mint.color.pallet.yellow500}`,
      background: theme.mint.color.background.containerBg.layer1,
      color: theme.mint.color.pallet.yellow500,
      " &:hover": {
        border: `1px solid ${theme.mint.color.pallet.yellow500}`,
        background: theme.mint.color.background.containerBg.layer1,
        color: theme.mint.color.pallet.yellow500,
      },
      "&:active": {
        border: `1px solid ${theme.mint.color.pallet.yellow500}`,
        background: theme.mint.color.background.containerBg.layer1,
        color: theme.mint.color.pallet.yellow500,
      },
    },
    "&.MuiButton-tonalYellow": {
      background: theme.mint.color.pallet.yellowBrilliant300,
      color: theme.mint.color.pallet.yellow700,
      "&:hover": {
        background: theme.mint.color.pallet.yellowBrilliant300,
        color: theme.mint.color.pallet.yellow700,
      },
      "&:active": {
        background: theme.mint.color.pallet.yellowBrilliant300,
        color: theme.mint.color.pallet.yellow700,
      },
    },
    "&.MuiButton-containedBlue": {
      background: theme.mint.color.pallet.blue500,
      " &:hover": {
        background: theme.mint.color.pallet.blue500,
      },
      "&:active": {
        background: theme.mint.color.pallet.blue500,
      },
    },
    "&.MuiButton-outlinedBlue": {
      border: `1px solid ${theme.mint.color.pallet.blue500}`,
      background: theme.mint.color.background.containerBg.layer1,
      color: theme.mint.color.pallet.blue500,
      " &:hover": {
        border: `1px solid ${theme.mint.color.pallet.blue500}`,
        background: theme.mint.color.background.containerBg.layer1,
        color: theme.mint.color.pallet.blue500,
      },
      "&:active": {
        border: `1px solid ${theme.mint.color.pallet.blue500}`,
        background: theme.mint.color.background.containerBg.layer1,
        color: theme.mint.color.pallet.blue500,
      },
    },
    "&.MuiButton-tonalBlue": {
      background: theme.mint.color.pallet.blueBrilliant300,
      color: theme.mint.color.pallet.blue700,
      "&:hover": {
        background: theme.mint.color.pallet.blueBrilliant300,
        color: theme.mint.color.pallet.blue700,
      },
      "&:active": {
        background: theme.mint.color.pallet.blueBrilliant300,
        color: theme.mint.color.pallet.blue700,
      },
    },
    "&.MuiButton-containedOrange": {
      background: theme.mint.color.pallet.orange500,
      " &:hover": {
        background: theme.mint.color.pallet.orange500,
      },
      "&:active": {
        background: theme.mint.color.pallet.orange500,
      },
    },
    "&.MuiButton-outlinedOrange": {
      border: `1px solid ${theme.mint.color.pallet.orange500}`,
      background: theme.mint.color.background.containerBg.layer1,
      color: theme.mint.color.pallet.orange500,
      " &:hover": {
        border: `1px solid ${theme.mint.color.pallet.orange500}`,
        background: theme.mint.color.background.containerBg.layer1,
        color: theme.mint.color.pallet.orange500,
      },
      "&:active": {
        border: `1px solid ${theme.mint.color.pallet.orange500}`,
        background: theme.mint.color.background.containerBg.layer1,
        color: theme.mint.color.pallet.orange500,
      },
    },
    "&.MuiButton-tonalOrange": {
      background: theme.mint.color.pallet.orangeBrilliant300,
      color: theme.mint.color.pallet.orange700,
      "&:hover": {
        background: theme.mint.color.pallet.orangeBrilliant300,
        color: theme.mint.color.pallet.orange700,
      },
      "&:active": {
        background: theme.mint.color.pallet.orangeBrilliant300,
        color: theme.mint.color.pallet.orange700,
      },
    },
    "&.MuiButton-containedGray": {
      background: theme.mint.color.extendedColors.gray.ex3,
      color: theme.mint.color.background.containerBg.layer1,
      " &:hover": {
        background: theme.mint.color.extendedColors.gray.ex3,
      },
      "&:active": {
        background: theme.mint.color.extendedColors.gray.ex3,
      },
    },
    "&.MuiButton-outlinedGray": {
      border: `1px solid ${theme.mint.color.pallet.gray500}`,
      background: theme.mint.color.background.containerBg.layer1,
      color: theme.mint.color.pallet.gray500,
      " &:hover": {
        border: `1px solid ${theme.mint.color.pallet.gray500}`,
        background: theme.mint.color.background.containerBg.layer1,
        color: theme.mint.color.pallet.gray500,
      },
      "&:active": {
        border: `1px solid ${theme.mint.color.pallet.gray500}`,
        background: theme.mint.color.background.containerBg.layer1,
        color: theme.mint.color.pallet.gray500,
      },
    },
    "&.MuiButton-tonalGray": {
      background: theme.mint.color.pallet.gray100,
      color: theme.mint.color.pallet.gray800,
      "&:hover": {
        background: theme.mint.color.pallet.gray100,
        color: theme.mint.color.pallet.gray800,
      },
      "&:active": {
        background: theme.mint.color.pallet.gray100,
        color: theme.mint.color.pallet.gray800,
      },
    },
    "&.MuiButton-containedPink": {
      background: theme.mint.color.pallet.pink500,
      " &:hover": {
        background: theme.mint.color.pallet.pink500,
      },
      "&:active": {
        background: theme.mint.color.pallet.pink500,
      },
    },
    "&.MuiButton-outlinedPink": {
      border: `1px solid ${theme.mint.color.pallet.pink500}`,
      background: theme.mint.color.background.containerBg.layer1,
      color: theme.mint.color.pallet.pink500,
      " &:hover": {
        border: `1px solid ${theme.mint.color.pallet.pink500}`,
        background: theme.mint.color.background.containerBg.layer1,
        color: theme.mint.color.pallet.pink500,
      },
      "&:active": {
        border: `1px solid ${theme.mint.color.pallet.pink500}`,
        background: theme.mint.color.background.containerBg.layer1,
        color: theme.mint.color.pallet.pink500,
      },
    },
    "&.MuiButton-tonalPink": {
      background: theme.mint.color.pallet.pink100,
      color: theme.mint.color.pallet.pink700,
      "&:hover": {
        background: theme.mint.color.pallet.pink100,
        color: theme.mint.color.pallet.pink700,
      },
      "&:active": {
        background: theme.mint.color.pallet.pink100,
        color: theme.mint.color.pallet.pink700,
      },
    },
  },
}));
