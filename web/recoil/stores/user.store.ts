import { atom } from "recoil"

import { DataStore } from "@/recoil/store";
import { User } from "@/models/user";

export const userStore = atom<DataStore<User>>({
  key: 'atom/user/User',
  default: {
    isFetched: true,
    loading: false
  }
});
