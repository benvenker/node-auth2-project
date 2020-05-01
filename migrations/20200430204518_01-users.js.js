exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments("id").unsigned().primary();
    tbl.text("username").notNull();
    tbl.text("password").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
