import { Key } from "./types";
import {
  CompanyInfo,
  User,
  UserCredential,
  CompanySizeType
} from "./user";
import { ModelRequirement } from ".";
import {
  AccountIdEqualsEmailException,
  NotCompanyException
} from "@/exceptions/user.exception";

export class UserCredentialModel implements UserCredential, ModelRequirement {
  constructor(
    public user: Key,
    public accountId: string,
    public id?: Key | undefined,
    public name?: string | undefined,
    public phoneNumber?: string | undefined,
    public email?: string | undefined,
    public password?: string | undefined) {      
    this.validate();
  }

  validate() {
    this.validateEmailId();
  }

  private validateEmailId() {
    if (!!this.email && !!this.accountId) {
      if (this.email !== this.accountId) {
        throw new AccountIdEqualsEmailException();
      }
    }
  }
}

export class CompanyInfoModel implements CompanyInfo, ModelRequirement {
  constructor(
    public user: Key,
    public id?: Key | undefined,
    public registrationNumber?: string | undefined,
    public ownerName?: string | undefined,
    public establishmentDate?: Date | undefined,
    public companySize?: CompanySizeType | undefined) {
    this.validate();
  }

  validate() { }
}

export class UserModel implements User, ModelRequirement {
  constructor(
    public id: Key,
    public isActive?: boolean | undefined,
    public updatedAt?: number | undefined,
    public createdAt?: number | undefined,
    public credential?: UserCredential | undefined,
    public companyInfo?: CompanyInfo | undefined) {
    this.validate();
  }

  validate() {}
}
