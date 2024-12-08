import HomeMenuIcon from "@/assets/icons/homeMenuIcon";
import InvestMenuIcon from "@/assets/icons/investMenuIcon";
import PortofoIcon from "@/assets/icons/portofoIcon";
import WalletMenuIcon from "@/assets/icons/walletMenuIcon";
import { CustomModal } from "@/components/ui/customModal/customModal";
import { useModal } from "@/hooks/useModal/useModal";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/navigation";

export const BottomMenu = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useModal();
  const menuItem = [
    {
      icon: <HomeMenuIcon path="/app" />,
      label: "خانه",
      path: "/app",
      active: true,
    },
    {
      icon: <InvestMenuIcon path="/invest" />,
      label: "سرمایه گذاری",
      path: "/invest",
      active: true,
    },
    {
      icon: <WalletMenuIcon sx={{ width: "24px", height: "24px" }} />,
      label: "لیزینگ",
      active: false,
    },
    {
      icon: <PortofoIcon sx={{ width: "24px", height: "24px" }} />,
      label: "پورتفوی",
      active: false,
    },
  ];
  return (
    <>
      <Box
        maxWidth={550}
        position="fixed"
        bottom="30px"
        left="32px"
        right="32px"
        margin="0 auto"
        zIndex={999}
      >
        <Box
          boxShadow="0px 4px 4px 0px #00000040"
          borderRadius="16px"
          bgcolor="primary.800"
          py="18px"
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={2}
        >
          {menuItem.map((item) => {
            return (
              <Box
                key={item.label}
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="6px"
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  if (item.active) {
                    router.push(item.path as string);
                  } else {
                    onOpen();
                  }
                }}
              >
                {item.icon}
                <Typography variant="label1Medium" color="#E3E3E3">
                  {item.label}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <CustomModal
        sxModal={{
          height: 200,
          maxWidth: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClose={onClose}
        sxBottomSheet={{ maxHeight: 100 }}
        open={isOpen}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h4Bold">به زودی ...</Typography>
        </Box>
      </CustomModal>
    </>
  );
};
