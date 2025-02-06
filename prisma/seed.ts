import 'reflect-metadata';
import { PrismaClient } from '@prisma/client';
import { PrismaPromise } from '@prisma/client/runtime/library';
import { recipes } from './fixtures';

export const fixIncrementalIndexesForSetIdColumns = async (
  prisma: PrismaClient,
) => {
  const tableNamesForIncrementalIndexes = await prisma.$queryRaw<
    Array<{ tablename: string }>
  >`SELECT c.relname AS tablename FROM pg_class c JOIN pg_attribute a ON a.attrelid = c.oid JOIN pg_type t ON a.atttypid = t.oid WHERE a.attname = 'id' AND t.typname = 'int4' AND c.relkind = 'r' AND pg_get_serial_sequence('"' || c.relname || '"', a.attname) IS NOT NULL`;

  await prisma.$transaction([
    ...tableNamesForIncrementalIndexes.reduce<Array<PrismaPromise<number>>>(
      (acc, table) => {
        acc.push(
          prisma.$executeRawUnsafe(
            `SELECT setval(pg_get_serial_sequence('"${table.tablename}"', 'id'), coalesce(max(id)+1, 1), false) FROM "${table.tablename}";`,
          ),
        );

        return acc;
      },
      [],
    ),
  ]);
};

export async function reseed(prisma: PrismaClient) {
  const seedRecipes = async () => {
    // Create recipes
    // Enforce the order
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
                  recipeId_for: {
                    recipeId: recipe.id,
                    for: directionAndIngredient.for,
                  },
                },
                create: {
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
          displayUrl: recipe.displayUrl,
          name: recipe.name,
          cuisine: recipe.cuisine,
          description: recipe.description,
          photoURL: recipe.photoURL,
          directionsAndIngredientsList: {
            connectOrCreate: recipe.directionsAndIngredients.map(
              (directionAndIngredient) => ({
                where: {
                  recipeId_for: {
                    recipeId: recipe.id,
                    for: directionAndIngredient.for,
                  },
                },
                create: {
                  for: directionAndIngredient.for,
                  ingredientList: directionAndIngredient.ingredientList,
                  directionList: directionAndIngredient.directionList,
                },
              }),
            ),
          },
          published: recipe.published,
        },
      });

      return;
    });
  };

  seedRecipes();
  fixIncrementalIndexesForSetIdColumns(prisma);
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
