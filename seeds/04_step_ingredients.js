// seeds/04_step_ingredients.js
exports.seed = function (knex) {
  return knex("step_ingredients").insert([
    { step_id: 2, ingredient_id: 1, quantity: 500 },
    { step_id: 3, ingredient_id: 2, quantity: 400 },
    { step_id: 4, ingredient_id: 4, quantity: 500 },
    { step_id: 5, ingredient_id: 5, quantity: 30 },
  ]);
};
