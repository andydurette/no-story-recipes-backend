/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Recipe` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[displayUrl]` on the table `Recipe` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Recipe_id_displayUrl_key";

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_id_key" ON "Recipe"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_displayUrl_key" ON "Recipe"("displayUrl");
