import { Router } from "express";
import * as chefController from "../controllers/chefController";

const router = Router();

// GET	/api/chefs	Récupérer tous les chefs
router.get("/", chefController.getAll);

// GET	/api/chefs/:id	Récupérer un chef avec ses recettes
router.get("/:id", chefController.getById);

// POST	/api/chefs	Créer un chef
router.post("/", chefController.create);

// PUT	/api/chefs/:id	Modifier un chef
router.put("/:id", chefController.update);

// DELETE	/api/chefs/:id	Supprimer un chef (et ses recettes en cascade)
router.delete("/:id", chefController.remove);

export default router;
