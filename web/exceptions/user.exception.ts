import { ValidationError } from ".";

export class AccountIdEqualsEmailException extends ValidationError {
  constructor() {
    super("유저 아이디는 이메일과 동일합니다.");
  }
}

export class NotCompanyException extends ValidationError {
  constructor() {
    super("유저 타입이 회사가 아닐 경우 회사 정보를 입력할 수 없습니다.");
  }
}
