import { Key } from "@/models/types";
import { BaseController, IController } from ".";
import { Auth } from "@/models/auth";
import { AuthCredentialData } from "@/forms/auth.data";

export class AuthCredentialController extends BaseController<AuthCredentialData> implements IController<Auth, AuthCredentialData> {
  private lazyItem?: Auth;

  async get() {
    if (this.lazyItem) { return this.lazyItem }
    return null;
  }

  async create(data: AuthCredentialData) {}

  async update(data: AuthCredentialData, key?: Key) {}

  async destroy(key?: Key) {}
}
