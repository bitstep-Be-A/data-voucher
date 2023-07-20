import { Key } from "./types";
import {
  CompanyInfo,
  User,
  UserCredential,
  UserTypeEnum
} from "./user";
import { ModelRequirement } from ".";
import { ValidationError } from "@/exceptions";

export class UserCredentialModel implements UserCredential, ModelRequirement {
  constructor(
    public name: string,
    public phoneNumber: string,
    public email: string,
    public accountId: string,
    public password: string,
    public id?: Key | undefined,
    public user?: Key | undefined) {
    this.validate();
  }

  validate() {
    this.validateEmailId();
  }

  private validateEmailId() {
    if (this.email !== this.accountId) {
      throw new ValidationError("유저 아이디는 이메일과 동일합니다.");
    }
  }
}

export class CompanyInfoModel implements CompanyInfo, ModelRequirement {
  constructor(
    public registrationNumber: string,
    public ownerName: string,
    public establishmentDate: Date,
    public companySize: "SBO" | "SME" | "ME" | "LE",
    public id?: Key | undefined,
    public user?: Key | undefined) {
    this.validate();
  }

  validate() { }
}

export class UserModel implements User, ModelRequirement {
  constructor(
    public isActive: boolean,
    public updatedAt: number,
    public createdAt: number,
    public userType: UserTypeEnum,
    public id?: Key | undefined,
    public credential?: UserCredential | undefined,
    public companyInfo?: CompanyInfo | undefined) {
    this.validate();
  }

  validate() {
    this.validateUserType();
  }

  private validateUserType() {
    if (this.companyInfo) {
      if (this.userType !== UserTypeEnum.Company) {
        throw new ValidationError("유저 타입이 회사가 아닐 경우 회사 정보를 입력할 수 없습니다.");
      }
    }
  }
}
