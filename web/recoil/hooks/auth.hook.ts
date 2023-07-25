import { useRecoilValue } from "recoil";
import { useMemo } from "react";

import { authTokenSelector, authStoreSelector } from "@/recoil/selectors/auth.selector";

export const useAuthToken = () => {
  return useRecoilValue(authTokenSelector);
}

export const useIsLogin = () => {
  const { item } = useRecoilValue(authStoreSelector);
  return useMemo(() => item?.isValid ?? false, [item]);
}
