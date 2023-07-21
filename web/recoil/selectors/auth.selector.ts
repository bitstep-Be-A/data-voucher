import { selector } from "recoil";

import { authTokenStore } from "../stores/auth.store";

export const authTokenSelector = selector({
  key: 'selector/auth/token',
  get: ({ get }) => get(authTokenStore)
});
