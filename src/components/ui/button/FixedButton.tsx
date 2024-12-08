"use client";

import React from "react";
import { Box } from "@mui/material";
import MainButton from "./btn";
import { LoadingButtonProps } from "@mui/lab";

interface FixedButtonProps extends LoadingButtonProps {
  containerProps?: React.ComponentProps<typeof Box>;
}

const FixedButton: React.FC<FixedButtonProps> = ({
  containerProps,
  ...buttonProps
}) => {
  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      p={2}
      zIndex={2}
      {...containerProps}
    >
      <MainButton {...buttonProps} />
    </Box>
  );
};

export default FixedButton;
