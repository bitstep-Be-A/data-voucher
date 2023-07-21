import { useRecoilValue } from "recoil";
import { useMemo } from "react";

import { authTokenSelector } from "../selectors/auth.selector";

export const useAuthToken = () => {
  return useRecoilValue(authTokenSelector);
}

export const useIsLogin = () => {
  const token = useAuthToken();
  return useMemo(() => !!token, [token]);
}
