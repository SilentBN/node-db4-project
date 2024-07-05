exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (table) => {
      table.increments("id");
      table.string("name").notNullable().unique();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("steps", (table) => {
      table.increments("id");
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.integer("step_number").notNullable();
      table.text("instructions").notNullable();
    })
    .createTable("ingredients", (table) => {
      table.increments("id");
      table.string("name").notNullable().unique();
    })
    .createTable("step_ingredients", (table) => {
      table
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("steps")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.float("quantity").notNullable();
      table.primary(["step_id", "ingredient_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
