export default class StorageProvider {
  constructor(name) {
    this.name = name;
  }

  listFiles() {}

  saveFile(file) {}

  getFile(path) {}

  deleteFile(path) {}
}
