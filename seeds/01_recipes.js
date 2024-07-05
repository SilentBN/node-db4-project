// seeds/01_recipes.js
exports.seed = function (knex) {
  return knex("recipes").insert([
    { name: "Spaghetti Bolognese" },
    { name: "Chicken Curry" },
  ]);
};
