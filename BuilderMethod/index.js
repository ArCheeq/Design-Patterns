import { MySQLQueryBuilder } from "./modules/MySqlQueryBuilder.js";
import { PostgreSQLQueryBuilder } from "./modules/PostgreSqlQueryBuilder.js";

const postgreSQLQueryBuilder = new PostgreSQLQueryBuilder();
const mySQLQueryBuilder = new MySQLQueryBuilder();

const postgresQuery = postgreSQLQueryBuilder
  .select(["id", "name"])
  .where("id = 1")
  .limit(10)
  .getSQL();

const mysqlQuery = mySQLQueryBuilder
  .select(["id", "name"])
  .where("id = 1")
  .limit(10)
  .getSQL();

console.log("PostgreSQL Query:", postgresQuery);
console.log("MySQL Query:", mysqlQuery);
