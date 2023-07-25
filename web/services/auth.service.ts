import { AuthCredentialData } from "@/forms/auth.data"
import { BaseService } from "."

export class AuthCredentialService extends BaseService<AuthCredentialData> {
  checkAccountIdNotBlank() {
    if (this.data?.accountId !== '') {
      return;
    }
    this.errors.push({
      name: 'AccountIdNotBlank',
      message: '유저 아이디를 입력해주세요.'
    });
  }

  checkPasswordNotBlank() {
    if (this.data?.password !== '') {
      return;
    }
    this.errors.push({
      name: 'PasswordNotBlank',
      message: '비밀번호를 입력해주세요.'
    });
  }
}
