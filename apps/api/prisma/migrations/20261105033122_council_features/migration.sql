-- AlterTable
ALTER TABLE "QuestProgress" ADD COLUMN     "reviewedAt" TIMESTAMP(3),
ADD COLUMN     "reviews" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "showOnLeaderboard" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE INDEX "QuestProgress_completedAt_idx" ON "QuestProgress"("completedAt");
