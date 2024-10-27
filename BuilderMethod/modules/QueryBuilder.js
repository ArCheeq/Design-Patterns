export class IQueryBuilder {
  select(fields) {
    throw new Error("Method not implemented");
  }

  where(condition) {
    throw new Error("Method not implemented");
  }

  limit(count) {
    throw new Error("Method not implemented");
  }

  getSQL() {
    throw new Error("Method not implemented");
  }
}
