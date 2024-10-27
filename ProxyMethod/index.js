import { CachedDownloader } from "./modules/CashedDownloader.js";
import { SimpleDownloader } from "./modules/SimpleDownloader.js";

(async () => {
  const simpleDownloader = new SimpleDownloader();
  const cachedDownloader = new CachedDownloader(simpleDownloader);

  const url = "https://jsonplaceholder.typicode.com/todos/1";

  console.log("First download (should download and cache):");
  const data1 = await cachedDownloader.download(url);
  console.log(data1);

  console.log("Second download (should return cached data):");
  const data2 = await cachedDownloader.download(url);
  console.log(data2);
})();
