import { Observable, Observer } from "./types";

export class SafetyStop implements Observable {
  private observers: Observer[] = [];

  public subscribe(o: Observer): void {
    const isNewSubscriber = this.observers.indexOf(o) === -1;
    if (isNewSubscriber) {
      this.observers.push(o);
    }
  }

  public unsubscribe(o: Observer): void {
    const isAlreadySubscribed = this.observers.indexOf(o) !== -1;
    if (isAlreadySubscribed) {
      this.observers.push(o);
    }
  }

  public notify(): void {
    this.observers.forEach((observer) => observer.notify());
  }
}
