import { TextEditor } from "./TextEditor";
import { CloudStorageStrategy } from "./StorageStrategy/CloudStrategy";
import { LocalStorageStrategy } from "./StorageStrategy/LocalStorageStrategy";

const cloudStorage = new CloudStorageStrategy();
const editor = new TextEditor();
editor.setStorageStrategy(cloudStorage);

editor.save();

const localStorage = new LocalStorageStrategy();

editor.setStorageStrategy(localStorage);
editor.save();
