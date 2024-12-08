import LossIcon from "@/assets/icons/LossIcon";
import ProfitIcon from "@/assets/icons/ProfitIcon";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const ReportSection = () => {
  return (
    <Box
      sx={{
        borderTop: 1,
        borderBottom: 1,
        borderColor: "bg.300",
        py: "20px",
        px: "16px",
      }}
    >
      <Box display="flex" flexDirection="column" gap="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="p1Bold">گزارش مالی</Typography>
            <Typography variant="label1Regular" color="neutral.400" mt="4px">
              ۱ اردیبهشت ۱۴۰۳ - ۱ خرداد ۱۴۰۳
            </Typography>
          </Box>
          <Typography variant="label1Bold" color="primary.500">
            مشاهده همه
          </Typography>
        </Box>
        <Box>
          <Box display="flex" justifyContent="space-between" gap="12px">
            <Box
              p="12px 16px"
              border="1px solid"
              borderColor="surface.500"
              borderRadius="14px"
              display="flex"
              gap="8px"
              width="100%"
            >
              <Box>
                <ProfitIcon />
              </Box>
              <Box display="flex" flexDirection="column" gap="4px">
                <Typography variant="p2Regular" color="neutral.300">
                  سرمایه‌گذاری
                </Typography>
                <Typography variant="label1Bold" color="neutral.600">
                  ۴۰۵,۷۵۰,۰۰۰ ریال
                </Typography>
              </Box>
            </Box>
            <Box
              p="12px"
              border="1px solid"
              borderColor="surface.500"
              borderRadius="14px"
              display="flex"
              gap="8px"
              width="100%"
            >
              <Box>
                <LossIcon />
              </Box>
              <Box display="flex" flexDirection="column" gap="4px">
                <Typography variant="p2Regular" color="neutral.300">
                  فروش سرمایه
                </Typography>
                <Typography variant="label1Bold" color="neutral.600">
                  ۲۱۵,۰۰۰,۰۰۰ ریال
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ReportSection;
