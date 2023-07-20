"use client";

import { createContext } from "react";

import { ControllerHookReturn, useController } from "@/controllers/hooks";
import { User } from "@/models/user";
import { UserController } from "@/controllers/user.controller";
import userService from "@/services/user.service";
import { userStore } from "@/recoil/stores/user.store";

export interface LoginControllerStore {
  userController: ControllerHookReturn<User>;
}

export const LoginContext = createContext<LoginControllerStore | null>(null);

export default function LoginProvider({ children }: {
  children: React.ReactNode;
}) {
  const userController = useController(
    new UserController(userService),
    userStore
  )

  return (
    <LoginContext.Provider value={{
      userController,
    }}>
      {children}
    </LoginContext.Provider>
  );
}
