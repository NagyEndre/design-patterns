import { BaseHandler } from "./BaseHandler";

export class ArgumentValidator extends BaseHandler {
  handle(arg: any): void {
    if (this.isDefined(arg)) {
      this.nextHandler?.handle(arg);
    } else {
      throw new Error("Invalid argument.");
    }
  }

  private isDefined(arg: any): boolean {
    return arg !== null && arg !== undefined;
  }
}
