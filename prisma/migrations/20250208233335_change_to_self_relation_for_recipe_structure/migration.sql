/*
  Warnings:

  - You are about to drop the `RelatedRecipes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RelatedRecipes" DROP CONSTRAINT "RelatedRecipes_recipeId_fkey";

-- DropTable
DROP TABLE "RelatedRecipes";

-- CreateTable
CREATE TABLE "_RelatedRecipes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_RelatedRecipes_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_RelatedRecipes_B_index" ON "_RelatedRecipes"("B");

-- AddForeignKey
ALTER TABLE "_RelatedRecipes" ADD CONSTRAINT "_RelatedRecipes_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RelatedRecipes" ADD CONSTRAINT "_RelatedRecipes_B_fkey" FOREIGN KEY ("B") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
