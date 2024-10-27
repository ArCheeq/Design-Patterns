import { Renderer } from "./Renderer.js";

export class HTMLRenderer extends Renderer {
  render(data) {
    let html = "<html><body>";
    for (const key in data) {
      if (typeof data[key] === "object" && !Array.isArray(data[key])) {
        html += `<div><strong>${key}:</strong><div>`;
        for (const subKey in data[key]) {
          html += `<p><strong>${subKey}:</strong> ${data[key][subKey]}</p>`;
        }
        html += `</div></div>`;
      } else {
        html += `<h1>${key}</h1><p>${data[key]}</p>`;
      }
    }
    html += "</body></html>";
    return html;
  }
}
