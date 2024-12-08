"use client";

import logo from "@/assets/svg/logo.svg";
import logoPattern from "@/assets/svg/logoPattern.svg";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const isMobileDevice = () => {
      return /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent);
    };

    const targetRoute = isMobileDevice() ? "/install" : "/app";

    const timer = setTimeout(() => {
      router.push(targetRoute);
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="100vw"
        height="100dvh"
        position="relative"
        bgcolor="primary.800"
        sx={{
          overflow: "hidden",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <Image src={logo} alt="logo" />

        <Image
          src={logoPattern}
          alt="logo pattern"
          style={{
            objectFit: "cover",
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "50%",
            height: "auto",
          }}
        />

        <Box
          position="absolute"
          bottom="16px"
          textAlign="center"
          color="white"
          fontSize="14px"
          fontFamily="Arial"
        >
          Padash © 2024
        </Box>
      </Box>
    </>
  );
}
