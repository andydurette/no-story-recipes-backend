import { Prisma } from '@prisma/client';

export const recipeSelection = Prisma.validator<Prisma.RecipeSelect>()({
  id: true,
  displayUrl: true,
  cuisine: true,
  description: true,
  directionsAndIngredientsList: true,
  relatedTo: true,
  relatedRecipes: true,
  name: true,
  photoURL: true,
  published: true,
});

export const recipeResponseSelection = Prisma.validator<Prisma.RecipeSelect>()({
  id: true,
  displayUrl: true,
  cuisine: true,
  description: true,
  directionsAndIngredientsList: true,
  relatedTo: true,
  relatedRecipes: true,
  name: true,
  photoURL: true,
  published: false,
});
