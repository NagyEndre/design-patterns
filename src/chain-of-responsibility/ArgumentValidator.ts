import { BaseHandler } from "./BaseHandler";

export class ArgumentValidator extends BaseHandler {
  handle(request: any): void {
    if (this.isValid(request)) {
      this.nextHandler?.handle(request);
    } else {
      throw new Error("Invalid argument.");
    }
  }

  private isValid(arg: any): boolean {
    return arg !== null && arg !== undefined;
  }
}
