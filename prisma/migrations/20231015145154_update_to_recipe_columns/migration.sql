/*
  Warnings:

  - You are about to drop the column `content` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Recipe` table. All the data in the column will be lost.
  - Added the required column `description` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `directions` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photoURL` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "content",
DROP COLUMN "image",
DROP COLUMN "title",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "directions" TEXT NOT NULL,
ADD COLUMN     "ingredients" TEXT[],
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "photoURL" TEXT NOT NULL,
ALTER COLUMN "published" SET DEFAULT true;
