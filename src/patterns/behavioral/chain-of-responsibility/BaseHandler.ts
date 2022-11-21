export interface Handler {
  handle(arg: any): void;
  setNext(h: Handler): void;
}

export abstract class BaseHandler implements Handler {
  protected nextHandler: Handler | null = null;

  handle(request: any): void {
    if (this.nextHandler !== null) {
      this.nextHandler.handle(request);
    }
  }

  setNext(h: Handler): void {
    this.nextHandler = h;
  }
}
