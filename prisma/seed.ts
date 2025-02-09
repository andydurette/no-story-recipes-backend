import 'reflect-metadata';
import { PrismaClient } from '@prisma/client';
import { recipes } from './fixtures';

export async function reseed(prisma: PrismaClient) {
  const updateRecipesRelated = async () => {
    await Promise.all(
      recipes.map(async (recipe) => {
        await prisma.recipe.update({
          where: { id: recipe.id },
          data: {
            relatedRecipes: {
              connect: recipe.relatedRecipes.map((relatedId) => ({
                id: relatedId,
              })),
            },
          },
        });
      }),
    );
  };

  const seedRecipes = async () => {
    await Promise.all(
      recipes.map(async (recipe) => {
        await prisma.recipe.upsert({
          where: { id: recipe.id },
          update: {
            id: recipe.id,
            displayUrl: recipe.displayUrl,
            name: recipe.name,
            cuisine: recipe.cuisine,
            description: recipe.description,
            photoURL: recipe.photoURL,
            directionsAndIngredientsList: {
              connectOrCreate: recipe.directionsAndIngredients.map(
                (directionAndIngredient) => ({
                  where: {
                    recipeId_forDataSlug: {
                      recipeId: recipe.id,
                      forDataSlug: directionAndIngredient.forDataSlug,
                    },
                  },
                  create: {
                    forDataSlug: directionAndIngredient.forDataSlug,
                    for: directionAndIngredient.for,
                    ingredientList: directionAndIngredient.ingredientList,
                    directionList: directionAndIngredient.directionList,
                  },
                }),
              ),
            },
            published: recipe.published,
          },
          create: {
            id: recipe.id,
            displayUrl: recipe.displayUrl,
            name: recipe.name,
            cuisine: recipe.cuisine,
            description: recipe.description,
            directionsAndIngredientsList: {
              connectOrCreate: recipe.directionsAndIngredients.map(
                (directionAndIngredient) => ({
                  where: {
                    recipeId_forDataSlug: {
                      recipeId: recipe.id,
                      forDataSlug: directionAndIngredient.forDataSlug,
                    },
                  },
                  create: {
                    forDataSlug: directionAndIngredient.forDataSlug,
                    for: directionAndIngredient.for,
                    ingredientList: directionAndIngredient.ingredientList,
                    directionList: directionAndIngredient.directionList,
                  },
                }),
              ),
            },
            photoURL: recipe.photoURL,
            published: recipe.published,
          },
        });
      }),
    );

    await updateRecipesRelated();
  };

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
