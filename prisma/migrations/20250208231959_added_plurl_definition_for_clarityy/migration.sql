/*
  Warnings:

  - You are about to drop the `RelatedRecipe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RelatedRecipe" DROP CONSTRAINT "RelatedRecipe_recipeId_fkey";

-- DropTable
DROP TABLE "RelatedRecipe";

-- CreateTable
CREATE TABLE "RelatedRecipes" (
    "id" SERIAL NOT NULL,
    "recipeId" INTEGER NOT NULL,

    CONSTRAINT "RelatedRecipes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RelatedRecipes" ADD CONSTRAINT "RelatedRecipes_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
