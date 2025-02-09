/*
  Warnings:

  - Added the required column `forDataSlug` to the `DirectionsAndIngredientsList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DirectionsAndIngredientsList" ADD COLUMN     "forDataSlug" TEXT NOT NULL;
