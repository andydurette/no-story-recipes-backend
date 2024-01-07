/*
  Warnings:

  - A unique constraint covering the columns `[id,displayUrl]` on the table `Recipe` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Recipe_id_key";

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "displayUrl" TEXT NOT NULL DEFAULT 'temp';

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_id_displayUrl_key" ON "Recipe"("id", "displayUrl");
