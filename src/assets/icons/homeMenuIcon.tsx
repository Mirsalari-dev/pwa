import { usePathname } from "next/navigation";

const HomeMenuIcon = ({ path }: { path: string }) => {
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
        d="M20.04 6.82018L14.28 2.79018C12.71 1.69018 10.3 1.75018 8.78999 2.92018L3.77999 6.83018C2.77999 7.61018 1.98999 9.21018 1.98999 10.4702V17.3702C1.98999 19.9202 4.05999 22.0002 6.60999 22.0002H17.39C19.94 22.0002 22.01 19.9302 22.01 17.3802V10.6002C22.01 9.25018 21.14 7.59018 20.04 6.82018ZM12.75 18.0002C12.75 18.4102 12.41 18.7502 12 18.7502C11.59 18.7502 11.25 18.4102 11.25 18.0002V15.0002C11.25 14.5902 11.59 14.2502 12 14.2502C12.41 14.2502 12.75 14.5902 12.75 15.0002V18.0002Z"
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
        d="M12 18V15"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.07 2.81985L3.14002 8.36985C2.36002 8.98985 1.86002 10.2998 2.03002 11.2798L3.36002 19.2398C3.60002 20.6598 4.96002 21.8098 6.40002 21.8098H17.6C19.03 21.8098 20.4 20.6498 20.64 19.2398L21.97 11.2798C22.13 10.2998 21.63 8.98985 20.86 8.36985L13.93 2.82985C12.86 1.96985 11.13 1.96985 10.07 2.81985Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HomeMenuIcon;
