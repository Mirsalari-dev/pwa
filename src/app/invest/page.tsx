"use client";

import AddIcon from "@/assets/icons/addIcon";
import FourPIcon from "@/assets/icons/fourPIcon";
import NotifIcon from "@/assets/icons/notifIcon";
import ReduceIcon from "@/assets/icons/reduceIcon";
import ViewTitle from "@/assets/icons/viewTitle";
import AssetBox from "@/components/common/assetBox/AssetBox";
import { BottomMenu } from "@/components/common/bottomMenu/bottomMenu";
import TopHeader from "@/components/common/topHeader/TopHeader";
import { getGreeting } from "@/utils/getGreeting";
import { Box, Typography } from "@mui/material";

export default function InvestPage() {
  const increaseItems = [
    {
      label: "افزایش",
      icon: <AddIcon sx={{ width: "24px", height: "24px" }} />,
      path: "",
    },
    {
      label: "کاهش",
      icon: <ReduceIcon sx={{ width: "24px", height: "24px" }} />,
      path: "",
    },
    {
      label: "پرتفوی",
      icon: <ViewTitle sx={{ width: "24px", height: "24px" }} />,
      path: "",
    },
  ];

  return (
    <Box paddingBottom="140px">
      <TopHeader>
        <Box
          mt="40px"
          mb="20px"
          px="40px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box gap="16px" display="flex" alignItems="center">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="40px"
              height="40px"
              borderRadius="100%"
              bgcolor="white"
            >
              <FourPIcon />
            </Box>
            <Box display="flex" flexDirection="column" gap="2px">
              <Typography color="white" variant="label2Regular">
                {getGreeting()}
              </Typography>
              <Typography color="white" variant="p2Bold">
                سعید آزادی فر
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <NotifIcon />
          </Box>
        </Box>
        <AssetBox
          shouldShowUpdate={true}
          updateText="بروزرسانی"
          assetAmount="۱۳۸،۴۵۰،۲۳۰،۰۰۰،۰99"
          assetCurrency="ریال"
          increaseItems={increaseItems}
          titleSection="مجموع سرمایه شما:"
        />
      </TopHeader>

      <BottomMenu />
    </Box>
  );
}
