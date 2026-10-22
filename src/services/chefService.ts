import prisma from "../config/database";

// GET	/api/chefs	Récupérer tous les chefs
export const getAllChefs = async () => {
  return prisma.chef.findMany();
};

// GET	/api/chefs/:id	Récupérer un chef avec ses recettes
export const getChefById = async (id: number) => {
  return prisma.chef.findUnique({ where: { id }, include: { recipes: true } });
};

// POST	/api/chefs	Créer un chef
export const createChef = async (data: {
  firstName: string;
  lastName: string;
  specialty?: string;
}) => {
  return prisma.chef.create({ data });
};

// PUT	/api/chefs/:id	Modifier un chef
export const updateChef = async (
  id: number,
  data: {
    firstName?: string;
    lastName?: string;
    specialty?: string;
  },
) => {
  return prisma.chef.update({ where: { id }, data });
};

// DELETE	/api/chefs/:id	Supprimer un chef (et ses recettes en cascade)
export const deleteChef = async (id: number) => {
  return prisma.chef.delete({ where: { id } });
};
