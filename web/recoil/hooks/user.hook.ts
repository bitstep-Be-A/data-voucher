import { useRecoilValue } from "recoil";

import { userStoreSelector } from "../selectors/user.selector";

export const useUserStore = () => {
  return useRecoilValue(userStoreSelector);
}
