import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form className="w-[500px] flex flex-col items-center">
        <h1 className="text-2xl font-bold py-3">아이디 찾기</h1>
        <span className="text-center py-1 mb-2 text-sm">
          <p>회원가입 시 등록하셨던 휴대전화번호로 아이디를 찾습니다.</p>
          <p>휴대전화번호로 전송되는 인증번호를 입력해주세요.</p>
        </span>
        <div className="space-y-2 py-2 mb-6">
          <fieldset className="w-full flex justify-center items-center space-x-4">
            <input type="text" placeholder="휴대전화번호 입력 ('-' 제외)"
              className="w-56 border-b-2 border-gray-300 text-sm py-1.5 px-3"
            />
            <button className="w-[90px] bg-gray-500 rounded-sm text-sm text-white py-1.5">인증번호 전송</button>
          </fieldset>
          <fieldset className="w-full flex justify-center items-center space-x-4">
            <input type="text" placeholder="인증번호 입력"
              className="w-56 border-b-2 border-gray-300 text-sm py-1.5 px-3"
            />
            {/** Timer **/}
            <button className="w-[90px] bg-gray-500 rounded-sm text-sm text-white py-1.5">확인</button>
          </fieldset>
        </div>
        <button type="submit" className="w-40 bg-gray-500 rounded-sm text-sm text-white py-1.5">아이디 찾기</button>
      </form>
    </div>
  );
}
