import { BaseHandler } from "./BaseHandler";

export class Authenticator extends BaseHandler {
  private readonly admin = "BATMAN";
  private readonly key = "BATCAVE";

  handle(request: any): void {
    const { user, password } = request;

    if ((user as string).toUpperCase() !== this.admin) {
      throw new Error("Access denied. Only the dark knight might enter.");
    }
    if ((password as string).toUpperCase() !== this.key) {
      throw new Error("Access denied. imposters are not allowed.");
    }

    console.log("Access granted. Welcome.");

    this.nextHandler?.handle(request);
  }
}
