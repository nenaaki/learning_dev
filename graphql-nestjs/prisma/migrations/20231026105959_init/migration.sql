/*
  Warnings:

  - You are about to drop the `Orner` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Orner";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Owner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shopId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Owner_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop" ("shopId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Owner_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
