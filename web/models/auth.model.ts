import { Key } from "./types";
import { ModelRequirement } from ".";
import { Auth } from "./auth";
import { User } from "./user";

export class AuthModel implements Auth, ModelRequirement {
  constructor(
    public token?: string | undefined,
    public user?: User | undefined,
    public isValid?: boolean | undefined
  ) {
    this.validate();
  }

  validate() {}
}
