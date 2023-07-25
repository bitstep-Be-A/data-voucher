"use client";

import { createContext, useContext } from "react";

import { useController } from "@/controllers/hooks";
import { IObjectController } from "@/controllers";
import { UserCredentialData, UserData, CompanyInfoData } from "@/forms/user.data";
import {
  UserController,
  UserCredentialController,
  CompanyInfoController
} from "@/controllers/user.controller";
import { companyInfoStore, userCredentialStore, userStore } from "@/recoil/stores/user.store";
import { CompanyInfoService, UserCredentialService, UserService } from "@/services/user.service";

export interface RegisterControllerStore {
  userController: IObjectController<UserData>;
  userCredentialController: IObjectController<UserCredentialData>;
  companyInfoController: IObjectController<CompanyInfoData>;
}

const RegisterContext = createContext<RegisterControllerStore | null>(null);

export const useRegisterController = () => {
  return useContext(RegisterContext);
}

export default function RegisterProvider({ children }: {
  children: React.ReactNode;
}) {
  const userController = useController(
    new UserController(
      new UserService()
    ),
    userStore
  );

  const userCredentialController = useController(
    new UserCredentialController(
      new UserCredentialService()
    ),
    userCredentialStore
  );

  const companyInfoController = useController(
    new CompanyInfoController(
      new CompanyInfoService()
    ),
    companyInfoStore
  )

  return (
    <RegisterContext.Provider value={{
      userController,
      userCredentialController,
      companyInfoController
    }}>
      {children}
    </RegisterContext.Provider>
  );
}
