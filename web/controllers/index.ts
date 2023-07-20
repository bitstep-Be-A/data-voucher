import { Key } from "@/models/types"

export interface IController<ModelObject> {
  get?: (key?: Key, token?: string) => Promise<ModelObject>;
  list?: (filter?: object, key?: Key, token?: string) => Promise<ModelObject[]>;
  create: (data: ModelObject, token?: string) => Promise<void>;
  update: (data: ModelObject, key?: Key, token?: string) => Promise<void>;
  remove: (key?: Key, token?: string) => Promise<void>;
}
