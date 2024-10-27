import { BaseEntity } from "./BaseEntity.js";

export class User extends BaseEntity {
  validate(data) {
    if (data.email) {
      throw new Error("Updating email is not allowed.");
    }
    return data;
  }
}
