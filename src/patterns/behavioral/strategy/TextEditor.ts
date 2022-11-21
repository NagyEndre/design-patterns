import { StorageStrategy } from "./StorageStrategy/StorageStrategy";

export class TextEditor {
  private storageStrategy: StorageStrategy | null = null;
  private content: string = "";

  public set setContent(v: string) {
    this.content = v;
  }

  public setStorageStrategy(strategy: StorageStrategy) {
    this.storageStrategy = strategy;
  }

  public save() {
    this.storageStrategy?.store(this.content);
  }
}
