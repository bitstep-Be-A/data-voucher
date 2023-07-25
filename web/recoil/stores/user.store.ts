import { atom } from "recoil"

import { DataStore } from "@/recoil/store";
import {
  User,
  UserCredential,
  CompanyInfo
} from "@/models/user";

export const userStore = atom<DataStore<User>>({
  key: 'atom/user/User',
  default: {
    isFetched: true,
    loading: false
  }
});

export const userCredentialStore = atom<DataStore<UserCredential>>({
  key: 'atom/user/UserCredential',
  default: {
    isFetched: true,
    loading: false
  }
});

export const companyInfoStore = atom<DataStore<CompanyInfo>>({
  key: 'atom/user/CompanyInfo',
  default: {
    isFetched: true,
    loading: false
  }
});
