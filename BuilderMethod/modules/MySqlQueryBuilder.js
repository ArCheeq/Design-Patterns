import { IQueryBuilder } from "./QueryBuilder.js";

export class MySQLQueryBuilder extends IQueryBuilder {
  constructor() {
    super();
    this.query = {};
  }

  select(fields) {
    this.query.select = `SELECT ${fields.join(", ")}`;
    return this;
  }

  where(condition) {
    this.query.where = `WHERE ${condition}`;
    return this;
  }

  limit(count) {
    this.query.limit = `LIMIT ${count}`;
    return this;
  }

  getSQL() {
    return (
      `${this.query.select} ${this.query.where || ""} ${
        this.query.limit || ""
      }`.trim() + ";"
    );
  }
}
