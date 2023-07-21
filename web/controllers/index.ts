import { Key } from "@/models/types"

export interface IController<ModelObject> {
  get?: (key?: Key, token?: string) => Promise<ModelObject>;
  list?: (filter?: object, key?: Key, token?: string) => Promise<ModelObject[]>;
  create: (data: ModelObject, token?: string) => Promise<void>;
  update: (data: ModelObject, key?: Key, token?: string) => Promise<void>;
  destroy: (key?: Key, token?: string) => Promise<void>;
}

export interface IObjectController<T> {
  add: (data: T) => Promise<void>;
  modify: (data: T, key: Key) => Promise<void>;
  remove: (key: Key) => Promise<void>;
}
