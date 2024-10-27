export default class FileSystem {
  constructor() {
    if (typeof FileSystem.instance === "object") {
      return FileSystem.instance;
    }

    this.storageProviders = [];
    FileSystem.instance = this;
    return this;
  }

  addStorageProvider(provider) {
    this.storageProviders.push(provider);
  }

  setUserStorage(user, provider) {
    if (this.storageProviders.includes(provider)) {
      user.setStorage(provider);
    } else {
      throw new Error("Storage not found");
    }
  }

  getUserFiles(user) {
    return user.getStorage().listFiles();
  }

  saveUserFile(user, file) {
    return user.getStorage().saveFile(file);
  }
}
