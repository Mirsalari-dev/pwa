"use client";

import { usePathname } from "next/navigation";

const InvestMenuIcon = ({ path }: { path: string }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return isActive ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.25 12.5802V14.5602C13.25 15.2502 12.69 15.8102 12 15.8102C11.31 15.8102 10.75 15.2502 10.75 14.5602V12.5802C10.39 12.3602 10.11 12.0402 9.91 11.6602H3C2.45 11.6602 2 12.1102 2 12.6602V16.1902C2 19.4002 4.6 22.0002 7.81 22.0002H16.18C19.4 22.0002 22 19.4002 22 16.1902V12.6602C22 12.1102 21.55 11.6602 21 11.6602H14.09C13.89 12.0402 13.61 12.3602 13.25 12.5802Z"
        fill="white"
      />
      <path
        d="M16.19 2H7.81C4.6 2 2 4.6 2 7.81V9.16C2 9.71 2.45 10.16 3 10.16H9.67C9.9 8.84 11.21 7.9 12.64 8.28C13.44 8.49 14.09 9.14 14.3 9.94C14.32 10.01 14.32 10.09 14.33 10.16H21C21.55 10.16 22 9.71 22 9.16V7.81C22 4.6 19.4 2 16.19 2Z"
        fill="white"
      />
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.3511 10.9101C14.2511 11.6201 13.8311 12.2201 13.2511 12.5801V14.5601C13.2511 15.2501 12.6911 15.8101 12.0011 15.8101C11.3111 15.8101 10.7511 15.2501 10.7511 14.5601V12.5801C10.1711 12.2201 9.75109 11.6201 9.65109 10.9101C9.63109 10.8001 9.62109 10.6801 9.62109 10.5601C9.62109 9.04012 11.0611 7.86012 12.6411 8.28012C13.4411 8.49012 14.0911 9.14012 14.3011 9.94012C14.3911 10.2701 14.4011 10.6001 14.3511 10.9101Z"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M22.0016 10.9102H14.3516"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M9.64999 10.9102H2"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default InvestMenuIcon;
