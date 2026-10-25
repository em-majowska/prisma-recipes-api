import { Request, Response } from "express";
import * as recipeService from "../services/recipeService";
import { TDifficulty } from "../types";
import { Difficulty } from "../generated/enums";

// GET	/api/recipes	Récupérer toutes les recettes (avec recipe et tags)
export const getAll = async (req: Request, res: Response) => {
  const rawDifficulty = req.query.difficulty as string | undefined;
  const difficulty = rawDifficulty
    ? (Difficulty[rawDifficulty.toUpperCase() as keyof typeof Difficulty] as
        | TDifficulty
        | undefined)
    : undefined;
  const tag = req.query.tag as string | undefined;

  const recipes = await recipeService.getAllRecipes({ difficulty, tag });
  res.json(recipes);
};

// GET	/api/recipes/:id	Récupérer une recette (avec recipe et tags)
export const getById = async (req: Request, res: Response) => {
  const recipe = await recipeService.getRecipeById(Number(req.params.id));

  if (!recipe) {
    return res.status(404).json({ message: "Recipe non trouvé" });
  }
  res.json(recipe);
};

// POST	/api/recipes	Créer une recette
export const create = async (req: Request, res: Response) => {
  try {
    const recipe = await recipeService.createRecipe(req.body);
    res.status(201).json(recipe);
  } catch (error: any) {
    console.log(error.message);
    res.status(400).json({ message: "chefId invalide ou données invalides" });
  }
};

// PUT	/api/recipes/:id	Modifier une recette
export const update = async (req: Request, res: Response) => {
  try {
    const recipe = await recipeService.updateRecipe(
      Number(req.params.id),
      req.body,
    );
    res.json(recipe);
  } catch (error) {
    return res.status(404).json({ message: "Recipe non trouvé" });
  }
};

// DELETE	/api/recipes/:id	Supprimer une recette
export const remove = async (req: Request, res: Response) => {
  try {
    const recipe = await recipeService.deleteRecipe(Number(req.params.id));
    res.json(recipe);
  } catch (error) {
    return res.status(404).json({ message: "Recipe non trouvé" });
  }
};
