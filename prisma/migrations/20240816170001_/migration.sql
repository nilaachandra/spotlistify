/*
  Warnings:

  - You are about to drop the column `imageURL` on the `Playlist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "imageURL",
ADD COLUMN     "imageUrl" TEXT;
