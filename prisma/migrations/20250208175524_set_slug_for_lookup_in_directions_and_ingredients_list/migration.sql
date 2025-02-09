/*
  Warnings:

  - A unique constraint covering the columns `[recipeId,forDataSlug]` on the table `DirectionsAndIngredientsList` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "DirectionsAndIngredientsList_recipeId_for_key";

-- CreateIndex
CREATE UNIQUE INDEX "DirectionsAndIngredientsList_recipeId_forDataSlug_key" ON "DirectionsAndIngredientsList"("recipeId", "forDataSlug");
