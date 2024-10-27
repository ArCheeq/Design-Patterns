import { Renderer } from "./Renderer.js";

export class XmlRenderer extends Renderer {
  render(data) {
    let xml = "<root>";
    for (const key in data) {
      xml += `<${key}>${data[key]}</${key}>`;
    }
    xml += "</root>";
    return xml;
  }
}
