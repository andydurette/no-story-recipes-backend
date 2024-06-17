import 'reflect-metadata';
import { PrismaClient, Recipe } from '@prisma/client';
import { recipes } from './fixtures';

const removeRecipeId = (recipe): Recipe => {
  delete recipe.id;
  return recipe;
};

export async function reseed(prisma: PrismaClient) {
  const seedRecipes = () =>
    recipes.map(
      async (recipe) =>
        await prisma.recipe.upsert({
          where: { id: recipe.id },
          update: { ...removeRecipeId(recipe) },
          create: { ...removeRecipeId(recipe) },
        }),
    );

  seedRecipes();
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
