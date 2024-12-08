import MuiWrapper from "@/components/providers/muiProvider/muiProvider";
import ReactQueryProvider from "@/components/providers/reactQueryProvider/reactQueryProvider";
import { IRANYekanWeb } from "@/styles/font";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NProgressProvider from "@/components/providers/NProgress/NProgress";

export const metadata: Metadata = {
  title: "پاداش",
  description: "اپلیکیشن جامع پاداش",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: [
    "پاداش",
    "سرمایه گذاری",
    "لیزینگ",
    "پورتفوی",
    "سوپر اپلیکیشن پاداش",
  ],
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/logo.png",
        href: "/images/logo.png",
        rel: "shortcut icon",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/logo.png",
        href: "/images/logo.png",
        rel: "apple-touch-icon",
      },
    ],
  },
};

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
    <html lang="fa" dir="rtl">
      <body className={IRANYekanWeb.className}>
        <ReactQueryProvider>
          <AppRouterCacheProvider>
            <MuiWrapper>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <NProgressProvider>{children}</NProgressProvider>
            </MuiWrapper>
          </AppRouterCacheProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
