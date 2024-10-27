import { Renderer } from "./Renderer.js";

export class JsonRenderer extends Renderer {
  render(data) {
    return JSON.stringify(data, null, 2);
  }
}
