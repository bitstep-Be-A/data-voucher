import { ErrorDetail } from "@/exceptions";

export interface IService<T> {
  submit: (data: T) => void;
  getStatus: () => ErrorDetail[];
}

export class BaseService<T> implements IService<T> {
  protected data: T | null = null;
  protected errors: ErrorDetail[] = [];

  /**
  * check로 시작하는 method를 전부 실행시킵니다.
  */
  private executeCheckMethods() {
    for (const methodName of Object.getOwnPropertyNames(BaseService.prototype) as (keyof BaseService<T>)[]) {
      if (methodName.startsWith("check") && typeof this[methodName] === "function") {
        const method = this[methodName] as (() => void);
        method();
      }
    }
  }

  private initialize() {
    this.data = null;
    this.errors = [];
  }

  submit(data: T) {
    this.initialize();
    this.data = data;
    this.executeCheckMethods();
  }

  getStatus() {
    return this.errors;
  }
}
