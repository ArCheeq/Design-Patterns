import StorageProvider from "./StorageProvider.js";

export default class S3StorageProvider extends StorageProvider {
  constructor() {
    super("Amazon S3");
  }

  listFiles() {
    // Some logic for retrieving files from Amazon S3
    return ["file1_s3.txt", "file2_s3.txt"];
  }

  saveFile(file) {
    // Some logic for saving a file to Amazon S3
    console.log(`File ${file} saved on Amazon S3`);
  }

  getFile(path) {
    // Some logic for getting file from the Amazon S3...
    return "file1.txt";
  }

  deleteFile(path) {
    // Some logic for deleting a file from the Amazon S3...
    console.log(`The file ${path} is deleted from the local disk`);
  }
}
