import ArrowLeftIcon from "@/assets/icons/arrowLeft";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Behgozin = () => {
  return (
    <>
      <Box
        mt="30px"
        mb="14px"
        px="16px"
        py="15px"
        display="flex"
        justifyContent="space-between"
      >
        <Typography color="white" variant="p1Bold">
          خرید صندوق به‌گزین
        </Typography>
        <ArrowLeftIcon sx={{ fontSize: "32px", cursor: "pointer" }} />
      </Box>
    </>
  );
};
