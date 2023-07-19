"use client";

import { EventButton } from "@/components/Button";
import { UnderlinedTextInput } from "@/components/Input";

interface InputFieldProps {
  placeholder: string;
  buttonText: string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  buttonText
}) => {
  return (
    <div className="w-full flex justify-center items-center space-x-4">
      <UnderlinedTextInput placeholder={ placeholder } width={ 224 } />
      <EventButton
        width={'90px'}
      >
        { buttonText }
      </EventButton>
    </div>
  );
}

const FindCredentialIdForm: React.FC = () => {
  return (
    <form className="w-[500px] flex flex-col items-center">
      <fieldset className="mb-4">
        <legend className="text-2xl font-bold py-3 text-center">아이디 찾기</legend>
        <span className="text-center py-1 mb-2 text-sm">
          <p>회원가입 시 등록하셨던 휴대전화번호로 아이디를 찾습니다.</p>
          <p>휴대전화번호로 전송되는 인증번호를 입력해주세요.</p>
        </span>
        <div className="space-y-2 my-2 py-2">
          <InputField placeholder="휴대전화번호 입력 ('-' 제외)" buttonText="인증번호 전송" />
          <InputField placeholder="인증번호 입력" buttonText="확인" />
        </div>
      </fieldset>
      <EventButton
        width={ 160 }
        type={ "submit" }
      >
        아이디 찾기
      </EventButton>
    </form>
  );
}

export default FindCredentialIdForm;
