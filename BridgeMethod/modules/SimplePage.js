import { Page } from "./Page.js";

export class SimplePage extends Page {
  constructor(renderer, title, content) {
    super(renderer);
    this.title = title;
    this.content = content;
  }

  render() {
    const data = {
      title: this.title,
      content: this.content,
    };
    return this.renderer.render(data);
  }
}
