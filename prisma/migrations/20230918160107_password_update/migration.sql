-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userType" TEXT NOT NULL DEFAULT 'student',
    "state" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "emailVerified" DATETIME,
    "image" TEXT
);
INSERT INTO "new_User" ("createdAt", "email", "emailVerified", "id", "image", "name", "password", "state", "updatedAt", "userType") SELECT "createdAt", "email", "emailVerified", "id", "image", "name", "password", "state", "updatedAt", "userType" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
