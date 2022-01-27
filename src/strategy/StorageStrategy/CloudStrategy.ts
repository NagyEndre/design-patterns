import { StorageStrategy } from "./StorageStrategy";

export class CloudStorageStrategy implements StorageStrategy {
  public store(data: string) {
    console.log("TODO: Upload data to cloud.");
  }
}
