import { Box } from "@mui/material";
import { ReactNode } from "react";

const TopHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height={300}
      bgcolor="primary.800"
      mb="30px"
      sx={{
        borderBottomLeftRadius: "30px",
        borderBottomRightRadius: "30px",
        boxShadow: "0px 0px 16px 0px #FFFFFF00;",
      }}
    >
      {children}
    </Box>
  );
};
export default TopHeader;
