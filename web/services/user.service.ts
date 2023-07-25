import { BaseService } from ".";
import {
  CompanyInfoData,
  UserCredentialData,
  UserData
} from "@/forms/user.data";

export class UserService extends BaseService<UserData> {}

export class UserCredentialService extends BaseService<UserCredentialData> {}

export class CompanyInfoService extends BaseService<CompanyInfoData> {}
