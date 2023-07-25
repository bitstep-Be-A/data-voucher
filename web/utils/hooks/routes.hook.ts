import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { publicRoutes } from "@/routes";

export const useIsPrivateRoute = () => {
  const pathname = usePathname();
  const isPrivate = useMemo(() => {
    return Object.values(publicRoutes).every((route) => !route.re.test(pathname));
  }, [pathname]);

  return isPrivate;
}
