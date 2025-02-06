/*
  Warnings:

  - You are about to drop the `DirectionsAndIngredientList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DirectionsAndIngredientList" DROP CONSTRAINT "DirectionsAndIngredientList_recipeId_fkey";

-- DropTable
DROP TABLE "DirectionsAndIngredientList";

-- CreateTable
CREATE TABLE "DirectionsAndIngredientsList" (
    "id" SERIAL NOT NULL,
    "for" TEXT NOT NULL,
    "ingredientList" TEXT[],
    "directionList" TEXT[],
    "recipeId" INTEGER NOT NULL,

    CONSTRAINT "DirectionsAndIngredientsList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DirectionsAndIngredientsList" ADD CONSTRAINT "DirectionsAndIngredientsList_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
