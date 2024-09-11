import FileSystem from "./modules/FileSystem.js";
import LocalStorageProvider from "./modules/LocalStorageProvider.js";
import S3StorageProvider from "./modules/S3StorageProvider.js";
import User from "./modules/User.js";

const fileSystem = new FileSystem();

const localStorage = new LocalStorageProvider();
const s3Storage = new S3StorageProvider();

fileSystem.addStorageProvider(localStorage);
fileSystem.addStorageProvider(s3Storage);

const user1 = new User("User1");
const user2 = new User("User2");

fileSystem.setUserStorage(user1, localStorage);
fileSystem.setUserStorage(user2, s3Storage);

fileSystem.saveUserFile(user1, "new_file.txt");
fileSystem.saveUserFile(user2, "new_file_s3.txt");

console.log(fileSystem.getUserFiles(user1));
console.log(fileSystem.getUserFiles(user2));
