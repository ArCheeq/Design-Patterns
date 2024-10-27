import axios from "axios";
import { Downloader } from "./Downloader.js";

export class SimpleDownloader extends Downloader {
  async download(url) {
    const response = await axios.get(url);
    return response.data;
  }
}
