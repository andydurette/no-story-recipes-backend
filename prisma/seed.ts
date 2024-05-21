import 'reflect-metadata';
import { PrismaClient, Recipe } from '@prisma/client';
import { recipes } from './fixtures';

const removeRecipeId = (recipe): Recipe => {
  delete recipe.id;
  return recipe;
};

export async function reseed(prisma: PrismaClient) {
  const seedRecipes = () =>
    Promise.all(
      recipes.map(async (recipe) =>
        prisma.recipe.upsert({
          where: { id: recipe.id },
          update: {},
          create: { ...removeRecipeId(recipe) },
        }),
      ),
    );

  return Promise.all([seedRecipes()]);
}

if (require.main === module) {
  const prismaClient = new PrismaClient();
  reseed(prismaClient)
    .catch((e) => {
      console.error('Prisma Seed Error ⚠️: ', e);
      process.exit(1);
    })
    .finally(() => {
      prismaClient
        .$disconnect()
        .catch((e) => console.error('Prisma Client Disconnect Error ⚠️: ', e));
    });
}
