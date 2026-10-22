import { Request, Response } from "express";
import * as tagService from "../services/tagService";

// GET	/api/tags	Récupérer tous les tags (avec leurs recettes)
export const getAll = async (_req: Request, res: Response) => {
  const tags = await tagService.getAllTags();
  res.json(tags);
};

// POST	/api/tags	Créer un tag
export const create = async (req: Request, res: Response) => {
  try {
    const tag = await tagService.createTag(req.body);
    res.status(201).json(tag);
  } catch (error) {
    res.status(400).json({ message: "recipeId invalide" });
  }
};

// POST	/api/tags/:tagId/tags/:tagId	Associer un tag à une recette
export const addTag = async (req: Request, res: Response) => {
  try {
    const tag = await tagService.addTagToRecipe(
      Number(req.params.tagId),
      Number(req.params.recipeId),
    );
    res.status(201).json(tag);
  } catch (error) {
    res.status(400).json({ message: "recipeId invalide" });
  }
};

// DELETE	/api/tags/:tagId/tags/:tagId	Retirer un tag d'une recette
export const removeTag = async (req: Request, res: Response) => {
  try {
    const tag = await tagService.removeTagFromRecipe(
      Number(req.params.tagId),
      Number(req.params.recipeId),
    );
    res.json(tag);
  } catch (error) {
    return res.status(404).json({ message: "Recipe non trouvé" });
  }
};
