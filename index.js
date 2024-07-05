// index.js
const express = require("express");
const RecipesModel = require("./data/recipesModel");

const server = express();
server.use(express.json());

server.get("/api/recipes/:id", async (req, res) => {
  try {
    const recipe = await RecipesModel.getRecipeById(req.params.id);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving recipe", error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
