/*
  Warnings:

  - You are about to drop the `DescriptionList` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IngredientList` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DescriptionList" DROP CONSTRAINT "DescriptionList_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "IngredientList" DROP CONSTRAINT "IngredientList_recipeId_fkey";

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "description" TEXT NOT NULL;

-- DropTable
DROP TABLE "DescriptionList";

-- DropTable
DROP TABLE "IngredientList";

-- CreateTable
CREATE TABLE "DirectionsAndIngredientList" (
    "id" SERIAL NOT NULL,
    "for" TEXT NOT NULL,
    "ingredientList" TEXT[],
    "directionList" TEXT[],
    "recipeId" INTEGER NOT NULL,

    CONSTRAINT "DirectionsAndIngredientList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DirectionsAndIngredientList" ADD CONSTRAINT "DirectionsAndIngredientList_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
