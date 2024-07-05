// seeds/03_ingredients.js
exports.seed = function (knex) {
  return knex("ingredients").insert([
    { name: "Spaghetti" },
    { name: "Ground Beef" },
    { name: "Tomato Sauce" },
    { name: "Chicken" },
    { name: "Curry Powder" },
  ]);
};
