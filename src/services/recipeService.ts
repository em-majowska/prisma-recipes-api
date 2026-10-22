import prisma from "../config/database";
import { TDifficulty } from "../types";

// GET	/api/recipes	Récupérer toutes les recettes (avec chef et tags)
export const getAllRecipes = async () => {
  return prisma.recipe.findMany({ include: { chef: true, tags: true } });
};

// GET	/api/recipes/:id	Récupérer une recette (avec chef et tags)
export const getRecipeById = async (id: number) => {
  return prisma.recipe.findUnique({
    where: { id },
    include: { chef: true, tags: true },
  });
};

// POST	/api/recipes	Créer une recette
export const createRecipe = async (data: {
  title: string;
  description?: string;
  prepTime: number;
  difficulty: TDifficulty;
  chefId: number;
}) => {
  return prisma.recipe.create({ data });
};

// PUT	/api/recipes/:id	Modifier une recette
export const updateRecipe = async (
  id: number,
  data: {
    title?: string;
    description?: string;
    prepTime?: number;
    difficulty?: TDifficulty;
    chefId?: number;
  },
) => {
  return prisma.recipe.update({ where: { id }, data });
};

// DELETE	/api/recipes/:id	Supprimer une recette
export const deleteRecipe = async (id: number) => {
  return prisma.recipe.delete({ where: { id } });
};
