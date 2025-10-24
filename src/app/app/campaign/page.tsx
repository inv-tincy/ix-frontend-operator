"use client";

import { MintTypography } from "@/design-system";
import { Box, Stack, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Campaign() {

    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <Box height={"100%"}>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <MintTypography
                    size="head-l"
                    weight="700"
                    sx={{
                        fontStyle: "normal",
                        lineHeight: "150%",
                        color: (theme) => theme.mint.typography.fontSize.body,
                    }}
                >
                    {t("campaign.title")}
                </MintTypography>

            </Stack>
        </Box>
    );

}