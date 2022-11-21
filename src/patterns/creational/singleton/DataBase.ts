export class DataBaseSingleton {
  private static instance: DataBaseSingleton;

  private constructor() {}

  public static getInstance(): DataBaseSingleton {
    if (DataBaseSingleton.instance === undefined) {
      DataBaseSingleton.instance = new DataBaseSingleton();
    }
    return DataBaseSingleton.instance;
  }
}
