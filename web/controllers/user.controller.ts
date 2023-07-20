import { Key } from "@/models/types";
import { IController } from ".";

import userService from "@/services/user.service";
import { User, UserTypeEnum } from "@/models/user";

export class UserController implements IController<User> {
  private service?: object;

  constructor(service: typeof userService) {
    this.service = service;
  }

  async create(data: User, token?: string) {

  }
  async update(data: User, key?: Key, token?: string) {

  }
  async remove(key?: Key, token?: string) {

  }
}
