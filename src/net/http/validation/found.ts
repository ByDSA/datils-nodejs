import { isDefined } from "datils/datatypes/nullish";
import { throwErrorPopStack } from "datils/errors";
import { HttpStatusCode } from "../StatusCode";
import { HttpError } from "./HttpError";

export function assertFound<T>(value: T | null | undefined, msg?: string): asserts value is T {
  if (!isDefined(value))
    throwErrorPopStack(new NotFoundError(msg));
}

export class NotFoundError extends HttpError {
  constructor(message?: string) {
    super(HttpStatusCode.NOT_FOUND, message);
    this.name = NotFoundError.name;
  }
}
