// components/NProgressProvider.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const NProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.start();

    NProgress.done();

    return () => {
      NProgress.done();
    };
  }, [pathname, searchParams]);

  return <>{children}</>;
};

export default NProgressProvider;
