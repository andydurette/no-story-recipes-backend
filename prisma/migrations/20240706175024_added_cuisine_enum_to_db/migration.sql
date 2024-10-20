/*
  Warnings:

  - The `cuisine` column on the `Recipe` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Cuisine" AS ENUM ('AMERICAN', 'LATIN_AMERICAN', 'EUROPEAN', 'ASIAN', 'MIDDLE_EASTERN');

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "cuisine",
ADD COLUMN     "cuisine" "Cuisine"[];
