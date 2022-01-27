import { StorageStrategy } from "./StorageStrategy";

export class LocalStorageStrategy implements StorageStrategy {
  public store(data: string) {
    console.log("TODO: save to file");
  }
}
