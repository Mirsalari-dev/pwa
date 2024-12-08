"use client";

import { Box, Typography } from "@mui/material";

const Services = ({ data }: { data: { label: string; icon: any }[] }) => {
  return (
    <Box
      px="16px"
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gap="20px"
      mb={4}
    >
      {data.map((item, index) => (
        <Box
          key={index}
          display="flex"
          flexDirection="column"
          gap="8px"
          justifyContent="center"
          alignItems="center"
          sx={{ cursor: "pointer" }}
        >
          {item.icon}
          <Typography variant="label1Bold">{item.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Services;
