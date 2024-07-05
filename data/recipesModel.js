// data/recipesModel.js
const db = require("./dbConfig");

module.exports = {
  getRecipeById,
};

async function getRecipeById(recipe_id) {
  const recipe = await db("recipes").where({ id: recipe_id }).first();
  if (!recipe) return null;

  const steps = await db("steps").where({ recipe_id }).orderBy("step_number");

  const stepsWithIngredients = await Promise.all(
    steps.map(async (step) => {
      const ingredients = await db("step_ingredients")
        .join("ingredients", "ingredients.id", "step_ingredients.ingredient_id")
        .where({ step_id: step.id })
        .select(
          "ingredients.id as ingredient_id",
          "ingredients.name as ingredient_name",
          "step_ingredients.quantity"
        );

      return {
        ...step,
        ingredients,
      };
    })
  );

  return {
    recipe_id: recipe.id,
    recipe_name: recipe.name,
    created_at: recipe.created_at,
    steps: stepsWithIngredients,
  };
}
