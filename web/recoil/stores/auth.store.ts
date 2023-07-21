import { atom } from "recoil";

export const authTokenStore = atom<string>({
  key: 'atom/auth/token',
  default: ''
});
