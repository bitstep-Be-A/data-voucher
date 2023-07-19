"use client";

import Link from "next/link";

import { routes } from "@/routes";

import { EventButton } from "@/components/Button";
import { BlockedTextInput } from "@/components/Input";

interface InputFieldProps {
  labelName: string;
}

const InputField: React.FC<InputFieldProps> = ({
  labelName,
}) => {
  return (
    <div className="w-full flex justify-between items-center space-x-4">
      <label className="text-sm font-light">{labelName}</label>
      <BlockedTextInput width={208} />
    </div>
  )
}

const HelpCredentialInfo: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-end text-xs text-gray-500 space-x-3">
      <span>계정 정보를 잊으셨나요?</span>
      <div className="space-x-2">
        <Link href={routes.findCredentialId.path}
          className="underline hover:text-indigo-500"
        >
          아이디 찾기
        </Link>
        <Link href={routes.findCredentialPw.path}
          className="underline hover:text-indigo-500"
        >
          비밀번호 찾기
        </Link>
      </div>
    </div>
  )
}

const LoginForm: React.FC = () => {
  return (
    <form className="w-[286px] flex flex-col items-end">
      <div className="mb-6">
        <fieldset>
          <div className="space-y-4 my-2 py-2">
            <InputField labelName="아이디" />
            <InputField labelName="비밀번호" />
          </div>
        </fieldset>
        <HelpCredentialInfo />
      </div>
      <EventButton
        width={208}
        className="rounded"
      >
        로그인
      </EventButton>
    </form>
  )
}

import FindCredentialIdForm from "./FindCredentialIdForm";
import FindCredentialPwForm from "./FindCredentialPwForm";

export {
  LoginForm,
  FindCredentialIdForm,
  FindCredentialPwForm
};
