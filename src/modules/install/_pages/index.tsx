"use client";

import ChromeInstall from "@/modules/install/Chrome";
import FirefoxInstall from "@/modules/install/Firefox";
import OperaInstall from "@/modules/install/Opera";
import SafariInstall from "@/modules/install/Safari";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const InstallPage = () => {
  const router = useRouter();
  const [browserName, setBrowserName] = useState<string>("");

  useEffect(() => {
    const getBrowserName = () => {
      const userAgent = navigator.userAgent;

      if (
        userAgent.includes("Chrome") &&
        !userAgent.includes("Edg/") &&
        !userAgent.includes("OPR/")
      ) {
        return "Chrome";
      } else if (
        userAgent.includes("Safari") &&
        !userAgent.includes("Chrome")
      ) {
        return "Safari";
      } else if (userAgent.includes("Firefox")) {
        return "Firefox";
      } else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
        return "Opera";
      } else {
        return "Other";
      }
    };

    setBrowserName(getBrowserName());
  }, []);

  useEffect(() => {
    if (!!browserName && browserName === "Other") {
      router.push("/app");
    }
  }, []);

  return (
    <>
      <Box>
        {browserName === "Chrome" && <ChromeInstall />}
        {browserName === "Safari" && <SafariInstall />}
        {browserName === "Firefox" && <FirefoxInstall />}
        {browserName === "Opera" && <OperaInstall />}
      </Box>
    </>
  );
};
export default InstallPage;
