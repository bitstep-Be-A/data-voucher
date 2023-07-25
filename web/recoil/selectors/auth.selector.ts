import { selector } from "recoil";

import { authStore } from "../stores/auth.store";

export const authStoreSelector = selector({
  key: 'selector/auth/Auth',
  get: ({ get }) => get(authStore)
});

export const authTokenSelector = selector({
  key: 'selector/auth/token',
  get: ({ get }) => get(authStore).item?.token
});
