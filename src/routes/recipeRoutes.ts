import { Router } from "express";
import * as recipeController from "../controllers/recipeController";

const router = Router();

// GET	/api/recipes	Récupérer toutes les recettes (avec chef et tags)
router.get("/", recipeController.getAll);

// GET	/api/recipes/:id	Récupérer une recette (avec chef et tags)
router.get("/:id", recipeController.getById);

// POST	/api/recipes	Créer une recette
router.post("/", recipeController.create);

// PUT	/api/recipes/:id	Modifier une recette
router.put("/:id", recipeController.update);

// DELETE	/api/recipes/:id	Supprimer une recette
router.delete("/:id", recipeController.remove);

export default router;
