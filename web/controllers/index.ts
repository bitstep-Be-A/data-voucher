import { ErrorDetail } from "@/exceptions";
import { Key } from "@/models/types";
import { IService } from "@/services";

export interface IController<ModelObject, FormData> {
  get?: (
    ((key?: Key, token?: string) => (Promise<ModelObject | null>)) |
    ((token?: string) => (Promise<ModelObject | null>))
  );
  list?: (
    ((filter?: object, token?: string) => Promise<ModelObject[]>) |
    ((filter?: object) => Promise<ModelObject[]>)
  );
  create: (
    ((data: FormData, token?: string) => Promise<void> | Promise<ModelObject>) |
    ((data: FormData) => Promise<void> | Promise<ModelObject>)
  );
  update: (
    ((data: FormData, key?: Key, token?: string) => Promise<void> | Promise<ModelObject>) |
    ((data: FormData, key?: Key) => Promise<void> | Promise<ModelObject>)
  );
  destroy: (
    ((key?: Key, token?: string) => Promise<void> | Promise<ModelObject>) |
    ((key?: Key) => Promise<void> | Promise<ModelObject>)
  );
  errors: ErrorDetail[];
  isValid: () => boolean;
}

export interface IObjectController<T> {
  add: (data: T) => Promise<void>;
  modify: (data: T, key: Key) => Promise<void>;
  remove: (key: Key) => Promise<void>;
  errors: ErrorDetail[];
  loading: boolean;
}

export class BaseController<T> {
  protected service: IService<T>;
  private _errors: ErrorDetail[] = [];

  constructor(service: IService<T>) {
    this.service = service;
  }

  protected validate(data: T) {
    this.service.submit(data);
    this._errors = this.service.getStatus();
  }

  isValid() {
    return this._errors.length === 0;
  }

  get errors(): ErrorDetail[] {
    return this._errors;
  }
}
