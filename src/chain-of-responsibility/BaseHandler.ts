export interface Handler {
  handle(arg: any): void;
  setNext(h: Handler): void;
}

export class BaseHandler implements Handler {
  protected nextHandler: Handler | null = null;

  handle(arg: any): void {
    if (this.nextHandler !== null) {
      this.nextHandler.handle(arg);
    }
  }

  setNext(h: Handler): void {
    this.nextHandler = h;
  }
}
