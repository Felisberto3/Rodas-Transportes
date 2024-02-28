/*
  Warnings:

  - A unique constraint covering the columns `[BI]` on the table `Aluno` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `BI` to the `Aluno` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `aluno` ADD COLUMN `BI` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Aluno_BI_key` ON `Aluno`(`BI`);
