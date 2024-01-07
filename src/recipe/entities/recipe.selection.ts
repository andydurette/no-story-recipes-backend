import { Prisma } from '@prisma/client';

export const recipeSelection = Prisma.validator<Prisma.RecipeSelect>()({
  id: true,
  displayUrl: true,
  cuisine: true,
  description: true,
  directions: true,
  name: true,
  ingredients: true,
  photoURL: true,
  published: true,
});
