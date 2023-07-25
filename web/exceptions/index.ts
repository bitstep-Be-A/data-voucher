export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export type ErrorDetail = {
  name: string;
  message: string;
}
