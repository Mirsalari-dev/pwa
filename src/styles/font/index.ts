import localFont from "next/font/local";

export const IRANYekanWeb = localFont({
  src: [
    {
      path: "../../../public/fonts/yekan-bakh-regular.woff",
      weight: "400",
    },
    {
      path: "../../../public/fonts/yekan-bakh-medium.woff",
      weight: "400",
    },
    {
      path: "../../../public/fonts/yekan-bakh-bold.woff",
      weight: "700",
    },
  ],
  variable: "--font-yekan",
});
