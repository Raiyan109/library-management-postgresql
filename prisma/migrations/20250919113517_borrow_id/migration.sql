-- DropForeignKey
ALTER TABLE "public"."Borrow" DROP CONSTRAINT "Borrow_borrowId_fkey";

-- AlterTable
ALTER TABLE "public"."Borrow" ALTER COLUMN "borrowDate" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "returnDate" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Borrow" ADD CONSTRAINT "Borrow_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "public"."Book"("bookId") ON DELETE RESTRICT ON UPDATE CASCADE;
