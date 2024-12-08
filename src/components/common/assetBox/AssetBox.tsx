import React from "react";
import { Box, Typography } from "@mui/material";
import UpdateIcon from "@/assets/icons/updateIcon";
import LogoWhite from "@/assets/icons/logoWhite";
import { useRouter } from "next/navigation";

interface AssetBoxProps {
  shouldShowUpdate: boolean;
  updateText: string;
  assetAmount: string;
  assetCurrency: string;
  increaseItems: { label: string; icon: JSX.Element; path: string }[];
  titleSection: string;
}

const AssetBox: React.FC<AssetBoxProps> = ({
  shouldShowUpdate,
  updateText,
  assetAmount,
  assetCurrency,
  titleSection,
  increaseItems,
}) => {
  const router = useRouter();
  return (
    <Box px="32px">
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          height: "50px",
          p: "16px 20px",
          background:
            "linear-gradient(123.04deg, rgba(180, 180, 180, 0.25) -0.23%, rgba(79, 79, 79, 0.25) -0.22%, rgba(255, 255, 255, 0.25) 31.73%, rgba(175, 175, 175, 0.25) 97.16%), linear-gradient(0deg, rgba(1, 67, 143, 0.2), rgba(1, 67, 143, 0.2)), linear-gradient(123.04deg, rgba(180, 180, 180, 0.25) -0.23%, rgba(79, 79, 79, 0.25) -0.22%, rgba(255, 255, 255, 0.25) 31.73%, rgba(175, 175, 175, 0.25) 97.16%);",
        }}
      >
        <Box
          sx={{ cursor: "pointer", flexGrow: 1 }}
          gap="6px"
          display="flex"
          alignItems="center"
        >
          {shouldShowUpdate && (
            <>
              <UpdateIcon sx={{ width: "14px", height: "14px" }} />
              <Typography color="white" variant="label1Medium">
                {updateText}
              </Typography>
            </>
          )}
        </Box>

        <Box
          sx={{ flexShrink: 0 }}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <LogoWhite />
        </Box>
      </Box>

      {/* Main Content Section */}
      <Box
        sx={{
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          p: "16px 20px",
          backdropFilter: "blur(40px)",
          background:
            "linear-gradient(0deg, rgba(1, 67, 143, 0.2), rgba(1, 67, 143, 0.2)), linear-gradient(123.04deg, rgba(180, 180, 180, 0.25) -0.23%, rgba(79, 79, 79, 0.25) -0.22%, rgba(255, 255, 255, 0.25) 31.73%, rgba(175, 175, 175, 0.25) 97.16%)",
          boxShadow: "-3px -3px 9.6px rgba(0, 0, 0, 0.25)",
          overflow: "hidden",
          wordWrap: "break-word",
        }}
      >
        <Typography
          color="white"
          variant="p2Medium"
          sx={{ overflow: "hidden", whiteSpace: "normal" }}
        >
          {titleSection}
        </Typography>

        <Box
          display="inline-flex"
          alignItems="baseline"
          sx={{ width: "100%", flexWrap: "wrap" }}
        >
          <Typography
            color="white"
            variant="h3Bold"
            sx={{
              whiteSpace: "normal",
              fontSize: { xs: "22px", sm: "28px", md: "32px" },
              wordBreak: "break-word",
            }}
          >
            {assetAmount}
          </Typography>
          <Typography
            component="span"
            color="white"
            variant="p2Regular"
            sx={{
              fontSize: "10px",
              display: "inline",
              fontWeight: 400,
              ml: "6px",
              position: "relative",
              top: "-2px",
            }}
          >
            {assetCurrency}
          </Typography>
        </Box>

        {/* Increase Section */}
        <Box
          mt="20px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="8px"
        >
          {increaseItems.map((item, index) => (
            <Box
              key={index}
              border="1px dashed #D9D9D9"
              borderRadius="8px"
              height="70px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width="100%"
              maxWidth="150px"
              overflow="hidden"
              textOverflow="ellipsis"
              gap="8px"
              sx={{
                padding: "0px 20px !important",
                cursor: "pointer",
              }}
              onClick={() => {
                if (item.path) {
                  router.push(item.path);
                }
              }}
            >
              {item.icon}
              <Typography
                color="white"
                sx={{
                  whiteSpace: "nowrap",
                  fontSize: { xs: "12px", sm: "16px" },
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AssetBox;
