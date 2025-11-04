"use client";
import { Badge, Box } from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { errorToast } from "../UI/toast";
import {
  DeleteSvgIcon,
  CopyIcon,
  DeleteDisabledSvgIcon,
} from "../UI/icons/Icon";
import { TonalButton } from "../UI/button/button";
import DataTable, { IDataTableColumn } from "./DataTable";
import useCopyToClipboard from "@/hooks/useCopyToClipBoard";
import ConfirmationModal from "../Modal/ConfirmationModal";


type TCampaign = {
  id: string;
  title: string;
  startsAt: string;
  endsAt: string;
  status: number;
  releaseDate: string;
  defaultLanguageId: string;
  monitorsCount: number;
  interviewDuration: number;
  monitorPoints: number;
  appliedMonitorCount: number;
  scheduleConfirmed: number;
  vacantSlots: number;
  completion: number;
};

function CampaignListTable({
  campaignData,
  handlePageChange,
  paginationData,
  pageNumber,
  isFetching,
  handleDraftDeletion,
  campaignToDelete,
  setCampaignToDelete,
  toggleDeleteModal,
  deleteModal,
}: Readonly<{
  campaignData: TCampaign[];
  paginationData: any;
  handlePageChange: any;
  pageNumber: number;
  isFetching: boolean;
  handleDraftDeletion: (campaignId: string) => void;
  campaignToDelete: string;
  setCampaignToDelete: Dispatch<SetStateAction<string>>;
  toggleDeleteModal: any;
  deleteModal: any;
}>) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleCampaign = async (item: any) => {
    const { id: campaignId, status: campaignStatus } = item;
  };

  const handleModalOpen = (e: React.MouseEvent, campaignId: string) => {
    setCampaignToDelete(campaignId);
    e.stopPropagation();
    toggleDeleteModal();
  };

  const handleDeletion = () => {
    handleDraftDeletion(campaignToDelete);
  };

  const handleCampaignCopy = (campaignId: string) => {
    const url = `/app/campaign/creation?id=${campaignId}&mode=copy`;
    router.push(url);
  };

  const columnData: IDataTableColumn[] = [
    {
      key: "status",
      header: "campaign.campaignList.tableHeader.status",
      Cell: (campaign: any) => {
        return (
          <>
            {campaign?.status === 1 && (
              <TonalButton tonalVariant="blue">募集中</TonalButton>
            )}
            {campaign?.status === 0 && (
              <TonalButton tonalVariant="yellow">公開前</TonalButton>
            )}
            {campaign?.status === 2 && (
              <TonalButton tonalVariant="blue">募集中</TonalButton>
            )}
            {campaign?.status === 3 && (
              <TonalButton tonalVariant="red">募集終了</TonalButton>
            )}
          </>
        );
      },
      headerProps: {
        width: "102px",
      },
    },
    {
      key: "title",
      header: "campaign.campaignList.tableHeader.projectTitle",
      headerProps: {
        width: "320px",
      },
      cellProps: {
        sx: {
          wordWrap: "break-word",
          overflowWrap: "break-word",
          whiteSpace: "initial",
        },
      },
    },
    {
      key: "caseId",
      header: "campaign.campaignList.tableHeader.case-id",
      headerProps: {
        width: "110px",
      },
      cellProps: {
        sx: {
          wordWrap: "break-word",
          overflowWrap: "normal",
          whiteSpace: "initial",
        },
      },
      Cell: (item) => <CaseIdSection item={item} />,
    },
    {
      key: "implementationPeriod",
      header: "campaign.campaignList.tableHeader.implementationPeriod",
      Cell: (campaign: any) => {
        const startDate = campaign?.startsAt
          ? moment(campaign?.startsAt!).format("YYYY/MM/DD")
          : "";
        const endDate = campaign?.endsAt
          ? moment(campaign?.endsAt!).format("YYYY/MM/DD")
          : "";
        const implementationPeriod = `${startDate}\n${endDate}`;
        return (
          <Box display={"flex"}>
            {startDate && endDate && (
              <>
                <Box display={"flex"} alignItems={"end"}>
                  〜&nbsp;
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"end"}
                  whiteSpace={"pre-line"}
                >
                  {implementationPeriod}
                </Box>
              </>
            )}
          </Box>
        );
      },
      headerProps: {
        width: "117px",
      },
    },
    {
      key: "releaseDate",
      header: "campaign.campaignList.tableHeader.releaseDate",
      Cell: (campaign: any) => {
        return (
          <>
            {campaign?.releaseDate !== ""
              ? moment(campaign?.releaseDate).format("YYYY/MM/DD")
              : ""}
          </>
        );
      },
      headerProps: {
        width: "107px",
      },
    },
    {
      key: "monitorsCount",
      header: "campaign.campaignList.tableHeader.noOfApllicants",
      cellProps: {
        align: "right",
      },
      headerProps: {
        width: "88px",
      },
    },
    {
      key: "appliedMonitorCount",
      header: "campaign.campaignList.tableHeader.noOfApllicants1",
      cellProps: {
        align: "right",
      },
      headerProps: {
        width: "88px",
      },
    },
    {
      key: "scheduleConfirmed",
      header: "campaign.campaignList.tableHeader.fixedDate",
      cellProps: {
        align: "right",
      },
      headerProps: {
        width: "88px",
      },
    },
    // as per improvement requests 1659 it is hidden;Do not delete columns, just hide them. It may reappear at a later date.
    // {
    //   key: "vacantSlots",
    //   header: "campaign.campaignList.tableHeader.waitingList",
    //   cellProps: {
    //     align: "right",
    //   },
    //   headerProps: {
    //     width: "88px",
    //   },
    // },
    {
      key: "completion",
      header: "campaign.campaignList.tableHeader.completed",
      cellProps: {
        align: "right",
      },
      headerProps: {
        width: "88px",
      },
    },
    {
      key: "action",
      header: "",
      avoidRowClick: (campaign: any) => true,
      Cell: (campaign: any) => {
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
              paddingRight: '30px'
            }}
          >
            <Box
              sx={{ cursor: "pointer" }}
              onClick={(e) => handleCampaignCopy(campaign?.id)}
              data-testid={`copy-action${campaign?.id}`}
            >
              <CopyIcon
                sx={{
                  "&.MuiSvgIcon-root": {
                    width: "20px",
                    height: "20px",
                  },
                }}
              />
            </Box>
            {campaign?.status === 0 ? (
              <Box
                sx={{ cursor: "pointer" }}
                onClick={(e) => handleModalOpen(e, campaign?.id)}
                data-testid={`delete-action${campaign?.id}`}
              >
                <DeleteSvgIcon
                  sx={{
                    "&.MuiSvgIcon-root": {
                      width: "20px",
                      height: "20px",
                    },
                  }}
                />
              </Box>
            ) : (
              <Box
                sx={{ cursor: "pointer" }}
                data-testid={`delete-action${campaign?.id}`}
              >
                <DeleteDisabledSvgIcon
                  sx={{
                    "&.MuiSvgIcon-root": {
                      width: "20px",
                      height: "20px",
                    },
                  }}
                />
              </Box>
            )}
          </Box>
        );
      },

      headerProps: {
        width: "101px",
      },
    },
  ];

  return (
    <>
      <DataTable
        columns={columnData}
        data={campaignData}
        rowClick={handleCampaign}
        isFetching={campaignData?.length === 0 ? isFetching : false}
        paginationProps={{
          hasPagination: true,
          count: paginationData?.totalPages,
          defaultPage: 1,
          page: pageNumber,
          onChange: handlePageChange,
        }}
        noDataMessage="campaign.nopublishedproject"
        fixedSizeTable
        showDoubleScroll
        tableContainerStyle={{
          minHeight: "69vh",
        }}
      />
      {deleteModal && (
        <ConfirmationModal
          open={deleteModal}
          title="interview.delete-modal.header"
          content="interview.delete-modal.content"
          agreeButtonName="interview.delete-modal.agreeButton"
          disAgreeButtonName="interview.delete-modal.disAgreeButton"
          onDisagree={toggleDeleteModal}
          onAgree={handleDeletion}
          modalWidth="400px"
          agreeButtonColorVariant="error"
          disAgreeButtonVariant="gray"
        />
      )}
    </>
  );
}

export default CampaignListTable;
const CaseIdSection = ({ item }: { item: any }) => {
  const [hover, setHover] = useState(false);
  const { t } = useTranslation();
  const [_, copyToClipboard, __, handleCopyKeyPress] = useCopyToClipboard();

  useEffect(() => {
    const handleKeyPress = async (event: KeyboardEvent) => {
      if (hover) {
        handleCopyKeyPress(event, item?.caseId);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [hover, item?.caseId, handleCopyKeyPress]);

  return (
    <Box
      position={"relative"}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {hover && (
        <Box
          sx={{
            position: "absolute",
            right: "50%",
            top: "-17px",
          }}
        >
          <Badge
            badgeContent={t("common.copy")}
            color="primary"
            sx={{
              ".MuiBadge-badge": {
                backgroundColor: (theme) =>
                  theme.mint.color.surfaceGray.medium.pressed,
                minWidth: "100px",
              },
            }}
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard(item?.caseId);
            }}
          ></Badge>
        </Box>
      )}
      {item?.caseId}
    </Box>
  );
};
