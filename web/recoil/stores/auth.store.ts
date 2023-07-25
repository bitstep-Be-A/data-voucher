import { atom } from "recoil";

import { DataStore } from "@/recoil/store";
import { Auth } from "@/models/auth";

export const authTokenStore = atom<string>({
  key: 'atom/auth/token',
  default: ''
});

export const authStore = atom<DataStore<Auth>>({
  key: 'atom/auth/Auth',
  default: {
    isFetched: true,
    loading: false
  }
});
