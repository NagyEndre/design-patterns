export interface Observer {
  notify(): void;
}

export interface Observable {
  subscribe(o: Observer): void;
  unsubscribe(o: Observer): void;
  notify(): void;
}
