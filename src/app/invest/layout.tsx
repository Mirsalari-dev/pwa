import { Box } from "@mui/system";
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#01438F" },
    { media: "(prefers-color-scheme: light)", color: "#01438F" },
  ],
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      margin="0 auto"
      bgcolor="#FDFDFD"
      maxWidth={500}
      overflow="auto"
      position="relative"
    >
      {children}
    </Box>
  );
}
