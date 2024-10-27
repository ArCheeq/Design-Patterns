import { BaseEntity } from "./BaseEntity.js";

export class Order extends BaseEntity {
  validate(data) {
    if (!data.items || !data.total) {
      throw new Error("Order validation failed: items and total are required.");
    }
    return data;
  }

  onSuccess(data) {
    return {
      statusCode: 200,
      status: "success",
      order: data,
    };
  }
}
