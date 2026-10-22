import prisma from "../config/database";

// GET	/api/tags	Récupérer tous les tags (avec leurs recettes)
export const getAllTags = async () => {
  return prisma.tag.findMany({ include: { recipes: true } });
};

// POST	/api/tags	Créer un tag
export const createTag = async (data: { name: string }) => {
  return prisma.tag.create({ data });
};

// POST	/api/tags/:tagId/recipes/:recipeId	Associer un tag à une recette
export const addTagToRecipe = async (tagId: number, recipeId: number) => {
  return prisma.recipe.update({
    where: { id: recipeId },
    data: { tags: { connect: { id: tagId } } },
    include: { tags: true },
  });
};

// DELETE	/api/tags/:tagId/recipes/:recipeId	Retirer un tag d'une recette
export const removeTagFromRecipe = async (tagId: number, recipeId: number) => {
  return prisma.recipe.update({
    where: { id: recipeId },
    data: { tags: { disconnect: { id: tagId } } },
    include: { tags: true },
  });
};
