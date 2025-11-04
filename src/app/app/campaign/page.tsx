"use client";

import NoDataFound from "@/components/common/NoDataFound";
import { PlusSvgIcon } from "@/components/UI/icons/Icon";
import { MintButton, MintTypography } from "@/design-system";
import { Box, Stack, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CampaignListTable from "@/components/tables/CampaignListTable";

export default function Campaign() {

    const { t } = useTranslation();
    const theme = useTheme();
    const [campaignData, setCampaignData] = useState<any>([]);

    useEffect(() => {

        const generateMockCampaigns = (count: number): any[] => {
            const campaigns: any[] = [];
            for (let i = 1; i <= count; i++) {
                campaigns.push({
                    id: i.toString(),
                    title: `Campaign ${i}`,
                    startsAt: new Date(2025, 0, i).toISOString(),
                    endsAt: new Date(2025, 0, i + 5).toISOString(),
                    status: i % 4, // 0-3 random statuses
                    releaseDate: new Date(2025, 0, i - 1).toISOString(),
                    defaultLanguageId: i % 2 === 0 ? "en" : "ja",
                    monitorsCount: Math.floor(Math.random() * 100),
                    interviewDuration: Math.floor(Math.random() * 120) + 30,
                    monitorPoints: Math.floor(Math.random() * 1000),
                    appliedMonitorCount: Math.floor(Math.random() * 80),
                    scheduleConfirmed: Math.floor(Math.random() * 50),
                    vacantSlots: Math.floor(Math.random() * 10),
                    completion: Math.floor(Math.random() * 100),
                });
            }
            return campaigns;
        };

        setCampaignData(generateMockCampaigns(30));
    }, [])

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
                <MintButton
                    variant="contained"
                    size="medium"
                    color="primary"
                    data-testid="campaign-create"
                >
                    <PlusSvgIcon />
                    <MintTypography
                        size="body"
                        weight="500"
                        sx={{
                            fontStyle: "normal",
                            lineHeight: "100%",
                            color: (theme) => theme.mint.color.text.highInverse,
                        }}
                    >
                        {t("campaign.button.create")}
                    </MintTypography>
                </MintButton>
            </Stack>
            <Box pt={3}>
                {campaignData?.length === 0 ? (
                    <Box pt={2}>
                        <NoDataFound message={t("campaign.nopublishedproject")} />
                    </Box>
                ) : (
                    <CampaignListTable
                        campaignData={campaignData}
                        paginationData={{}}
                        handlePageChange={() => { }}
                        pageNumber={1}
                        isFetching={false}
                        handleDraftDeletion={() => { }}
                        campaignToDelete=""
                        setCampaignToDelete={() => { }}
                        toggleDeleteModal={() => { }}
                        deleteModal={false}
                    />
                )}
            </Box>
        </Box>
    );

}