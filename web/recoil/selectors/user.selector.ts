import { selector } from "recoil";

import { userStore } from "../stores/user.store";

export const userStoreSelector = selector({
  key: 'selector/user/User',
  get: ({ get }) => get(userStore)
});
