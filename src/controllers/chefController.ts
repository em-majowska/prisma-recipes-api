import { Request, Response } from "express";
import * as chefService from "../services/chefService";

// GET	/api/chefs	Récupérer tous les chefs
export const getAll = async (_req: Request, res: Response) => {
  const chefs = await chefService.getAllChefs();
  res.json(chefs);
};

// GET	/api/chefs/:id	Récupérer un chef avec ses recettes
export const getById = async (req: Request, res: Response) => {
  const chef = await chefService.getChefById(Number(req.params.id));

  if (!chef) {
    return res.status(404).json({ message: "Chef non trouvé" });
  }
  res.json(chef);
};

// POST	/api/chefs	Créer un chef
export const create = async (req: Request, res: Response) => {
  const chef = await chefService.createChef(req.body);
  res.status(201).json(chef);
};

// PUT	/api/chefs/:id	Modifier un chef
export const update = async (req: Request, res: Response) => {
  try {
    const chef = await chefService.updateChef(Number(req.params.id), req.body);
    res.json(chef);
  } catch (error) {
    return res.status(404).json({ message: "Chef non trouvé" });
  }
};

// DELETE	/api/chefs/:id	Supprimer un chef (et ses recettes en cascade)
export const remove = async (req: Request, res: Response) => {
  try {
    const chef = await chefService.deleteChef(Number(req.params.id));
    res.json(chef);
  } catch (error) {
    return res.status(404).json({ message: "Chef non trouvé" });
  }
};
