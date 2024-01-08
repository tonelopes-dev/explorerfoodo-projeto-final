exports.up = (knex) =>
  knex.schema.createTable("foods", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("desciption").notNullable().unique();
    table.integer("user_id").references("id").inTable("users");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });

exports.down = (knex) => {
  knex.schema.dropTableIfExists("foods");
};
