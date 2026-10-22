import prisma from "../config/database";
import { TDifficulty } from "../types";

// GET	/api/recipes	Récupérer toutes les recettes (avec chef et tags)
export const getAllRecipes = async (filters: {
  difficulty?: TDifficulty;
  tag?: string;
}) => {
  const where: any = {};
  if (filters.difficulty) {
    where.difficulty = filters.difficulty;
  }
  if (filters.tag) {
    where.tags = { some: { name: filters.tag } };
  }
  return prisma.recipe.findMany({ where, include: { chef: true, tags: true } });
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
  tagIds?: number[];
}) => {
  const { tagIds, ...recipeData } = data;
  return prisma.recipe.create({
    data: {
      ...recipeData,
      ...(tagIds && { tags: { connect: tagIds.map((id) => ({ id })) } }),
    },
    include: { chef: true, tags: true },
  });
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
  return prisma.recipe.update({
    where: { id },
    data,
    include: { chef: true, tags: true },
  });
};

// DELETE	/api/recipes/:id	Supprimer une recette
export const deleteRecipe = async (id: number) => {
  return prisma.recipe.delete({ where: { id } });
};
