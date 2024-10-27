export default class User {
  constructor(name) {
    this.name = name;
    this.storage = null;
  }

  setStorage(storageProvider) {
    this.storage = storageProvider;
  }

  getStorage() {
    return this.storage;
  }
}
