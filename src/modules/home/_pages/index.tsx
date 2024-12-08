"use client";

import AcademyIcon from "@/assets/icons/academyIcon";
import AddIcon from "@/assets/icons/addIcon";
import BasketWheeler from "@/assets/icons/basketWheeler";
import BoxesIcon from "@/assets/icons/BoxesIcon";
import BrokerageIcon from "@/assets/icons/brokerage";
import FinancingIcon from "@/assets/icons/FinancingIcon";
import FourPIcon from "@/assets/icons/fourPIcon";
import LeasingIcon from "@/assets/icons/LeasingIcon";
import NotifIcon from "@/assets/icons/notifIcon";
import ReduceIcon from "@/assets/icons/reduceIcon";
import RewardsCardIcon from "@/assets/icons/RewardsCardIcon";
import SupportIcon from "@/assets/icons/SupportIcon";
import ViewTitle from "@/assets/icons/viewTitle";
import AssetBox from "@/components/common/assetBox/AssetBox";
import { BottomMenu } from "@/components/common/bottomMenu/bottomMenu";
import TopHeader from "@/components/common/topHeader/TopHeader";
import ReportSection from "@/modules/home/components/ReportSection";
import Services from "@/modules/home/components/Services";
import SliderHomePage from "@/modules/home/components/sliders";
import { getGreeting } from "@/utils/getGreeting";
import { Box, Typography } from "@mui/material";

const HomePage = () => {
  const increaseItems = [
    {
      label: "افزایش",
      icon: <AddIcon sx={{ width: "24px", height: "24px" }} />,
      path: "/invest",
    },
    {
      label: "کاهش",
      icon: <ReduceIcon sx={{ width: "24px", height: "24px" }} />,
      path: "/invest",
    },
    {
      label: "پرتفوی",
      icon: <ViewTitle sx={{ width: "24px", height: "24px" }} />,
      path: "",
    },
  ];

  const iconData = [
    { icon: <BasketWheeler sx={{ fontSize: "48px" }} />, label: "سبدگردان" },
    { icon: <BrokerageIcon sx={{ fontSize: "48px" }} />, label: "کارگزاری" },
    { icon: <LeasingIcon sx={{ fontSize: "48px" }} />, label: "لیزینگ" },
    { icon: <FinancingIcon sx={{ fontSize: "48px" }} />, label: "تامین مالی" },
    { icon: <AcademyIcon sx={{ fontSize: "48px" }} />, label: "آکادمی" },
    {
      icon: <RewardsCardIcon sx={{ fontSize: "48px" }} />,
      label: "پاداش کارت",
    },
    { icon: <BoxesIcon sx={{ fontSize: "48px" }} />, label: "صندوق‌ها" },
    { icon: <SupportIcon sx={{ fontSize: "48px" }} />, label: "پشتیبانی" },
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
      <SliderHomePage />
      <Services data={iconData} />
      <ReportSection />
      <BottomMenu />
    </Box>
  );
};
export default HomePage;
