// seeds/02_steps.js
exports.seed = function (knex) {
  return knex("steps").insert([
    { recipe_id: 1, step_number: 1, instructions: "Boil water in a large pot" },
    {
      recipe_id: 1,
      step_number: 2,
      instructions: "Add spaghetti and cook for 8-10 minutes",
    },
    {
      recipe_id: 1,
      step_number: 3,
      instructions: "In a separate pan, brown the ground beef",
    },
    { recipe_id: 2, step_number: 1, instructions: "Cut chicken into cubes" },
    {
      recipe_id: 2,
      step_number: 2,
      instructions: "Fry chicken in oil until golden",
    },
  ]);
};
