import { Downloader } from "./Downloader.js";

export class CachedDownloader extends Downloader {
  constructor(simpleDownloader) {
    super();
    this.simpleDownloader = simpleDownloader;
    this.cache = new Map();
  }

  async download(url) {
    if (this.cache.has(url)) {
      console.log("Returning cached data for:", url);
      return this.cache.get(url);
    } else {
      const data = await this.simpleDownloader.download(url);
      this.cache.set(url, data);
      console.log("Downloading and caching data for:", url);
      return data;
    }
  }
}
