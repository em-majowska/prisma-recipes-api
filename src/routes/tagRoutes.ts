import { Router } from "express";
import * as tagController from "../controllers/tagController";

const router = Router();

// GET	/api/tags	Récupérer tous les tags (avec leurs recettes)
router.get("/", tagController.getAll);

// POST	/api/tags	Créer un tag
router.post("/", tagController.create);

// POST	/api/tags/:tagId/recipes/:recipeId	Associer un tag à une recette
router.post("/:tagId/recipes/:recipeId", tagController.addTag);

// DELETE	/api/tags/:tagId/recipes/:recipeId	Retirer un tag d'une recette
router.delete("/:tagId/recipes/:recipeId", tagController.removeTag);

export default router;
