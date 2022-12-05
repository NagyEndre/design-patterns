import { CloudStorageStrategy } from "./StorageStrategy/CloudStrategy";
import { LocalStorageStrategy } from "./StorageStrategy/LocalStorageStrategy";
import { TextEditor } from "./TextEditor";

const editor = new TextEditor();

const cloudStorage = new CloudStorageStrategy();
editor.setStorageStrategy(cloudStorage);
editor.save();

const localStorage = new LocalStorageStrategy();
editor.setStorageStrategy(localStorage);
editor.save();
