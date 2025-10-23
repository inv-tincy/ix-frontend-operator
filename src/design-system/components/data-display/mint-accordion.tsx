import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
} from "@mui/material";

export const MintAccordion = styled(Accordion)(({ theme }) => ({
  "&.MuiPaper-root": {
    width: "100%",
    boxShadow: "none",
    margin: 0,
    "&::before": {
      backgroundColor: "#fff",
    },
  },
}));
export const MintAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  ".MuiPaper-root-MuiAccordion-root:before": {
    backgroundColor: "none",
  },
  "&.MuiAccordionSummary-root": {
    padding: "4px 8px",
    borderRadius: "8px",
    backgroundColor: theme.mint.color.background.containerBg.layer2,
    boxShadow: "none",
    "&.Mui-expanded": {
      minHeight: "48px",
    },
    ".MuiAccordionSummary-content": {
      margin: 0,
    },
  },
}));
export const MintAccordionDetails = styled(AccordionDetails)(
  ({ theme }) => ({})
);
