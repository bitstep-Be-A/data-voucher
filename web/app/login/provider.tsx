"use client";

import { createContext, useContext } from "react";

import { useController } from "@/controllers/hooks";
import { IObjectController } from "@/controllers";
import { AuthCredentialData } from "@/forms/auth.data";
import { AuthCredentialController } from "@/controllers/auth.controller";
import { authStore } from "@/recoil/stores/auth.store";
import { AuthCredentialService } from "@/services/auth.service";

export interface LoginControllerStore {
  authCredentialController: IObjectController<AuthCredentialData>;
}

const LoginContext = createContext<LoginControllerStore | null>(null);

export const useLoginController = () => {
  return useContext(LoginContext);
}

export default function LoginProvider({ children }: {
  children: React.ReactNode;
}) {
  const authCredentialController = useController(
    new AuthCredentialController(
      new AuthCredentialService()
    ),
    authStore
  );

  return (
    <LoginContext.Provider value={{
      authCredentialController,
    }}>
      {children}
    </LoginContext.Provider>
  );
}
