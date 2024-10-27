import StorageProvider from "./StorageProvider.js";

export default class LocalStorageProvider extends StorageProvider {
  constructor() {
    super("Local Disk");
  }

  listFiles() {
    // Some logic for getting files from the local disk...
    return ["file1.txt", "file2.txt"];
  }

  saveFile(file) {
    // Some logic for saving a file to a local disk...
    console.log(`The file ${file} is saved on the local disk`);
  }

  getFile(path) {
    // Some logic for getting file from the local disk by path...
    return "file1.txt";
  }

  deleteFile(path) {
    // Some logic for deleting a file from a local disk...
    console.log(`The file ${path} is deleted from the local disk`);
  }
}
