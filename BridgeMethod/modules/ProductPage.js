import { Page } from "./Page.js";

export class Product {
  constructor(id, name, description, image) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
  }
}

export class ProductPage extends Page {
  constructor(renderer, product) {
    super(renderer);
    this.product = product;
  }

  render() {
    const data = {
      id: this.product.id,
      name: this.product.name,
      description: this.product.description,
      image: this.product.image,
    };
    return this.renderer.render(data);
  }
}
