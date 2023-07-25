import { Key } from "@/models/types";
import { BaseController, IController } from ".";
import { User, UserCredential, CompanyInfo } from "@/models/user";
import { CompanyInfoData, UserCredentialData, UserData } from "@/forms/user.data";

export class UserController extends BaseController<UserData> implements IController<User, UserData> {
  async create(data: UserData) {

  }
  async update(data: UserData, key?: Key, token?: string) {

  }
  async destroy(key?: Key, token?: string) {

  }
}

export class UserCredentialController extends BaseController<UserCredentialData> implements IController<UserCredential, UserCredentialData> {
  async create(data: UserCredentialData) {

  }

  async update(data: UserCredentialData, key?: Key, token?: string) {

  }

  async destroy(key?: Key, token?: string) {

  }
}

export class CompanyInfoController extends BaseController<CompanyInfoData> implements IController<CompanyInfo, CompanyInfoData> {
  async create(data: CompanyInfoData) {

  }

  async update(data: CompanyInfoData, key?: Key, token?: string) {

  }

  async destroy(key?: Key, token?: string) {

  }
}
