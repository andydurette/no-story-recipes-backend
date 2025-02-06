/*
  Warnings:

  - You are about to drop the column `description` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `directions` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `ingredients` on the `Recipe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "description",
DROP COLUMN "directions",
DROP COLUMN "ingredients";

-- CreateTable
CREATE TABLE "DescriptionList" (
    "id" SERIAL NOT NULL,
    "for" TEXT NOT NULL,
    "ingredientList" TEXT[],
    "recipeId" INTEGER NOT NULL,

    CONSTRAINT "DescriptionList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IngredientList" (
    "id" SERIAL NOT NULL,
    "for" TEXT NOT NULL,
    "ingredientList" TEXT[],
    "recipeId" INTEGER NOT NULL,

    CONSTRAINT "IngredientList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DescriptionList" ADD CONSTRAINT "DescriptionList_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngredientList" ADD CONSTRAINT "IngredientList_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
