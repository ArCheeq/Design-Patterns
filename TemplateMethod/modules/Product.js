import { BaseEntity } from "./BaseEntity.js";

export class Product extends BaseEntity {
  validate(data) {
    if (!data.name || !data.price) {
      throw new Error(
        "Product validation failed: name and price are required."
      );
    }
    return data;
  }

  async save(data) {
    try {
      await super.save(data);
    } catch (error) {
      this.notifyAdmin("Product validation failed.");
      throw error;
    }
  }

  notifyAdmin(message) {
    console.log(`Notifying admin: ${message}`);
  }
}
