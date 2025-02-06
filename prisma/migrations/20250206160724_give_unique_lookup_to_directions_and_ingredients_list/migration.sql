/*
  Warnings:

  - A unique constraint covering the columns `[recipeId,for]` on the table `DirectionsAndIngredientsList` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DirectionsAndIngredientsList_recipeId_for_key" ON "DirectionsAndIngredientsList"("recipeId", "for");
