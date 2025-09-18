-- CreateTable
CREATE TABLE "public"."Book" (
    "bookId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "publishedYear" INTEGER NOT NULL,
    "totalCopies" INTEGER NOT NULL,
    "availableCopies" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("bookId")
);

-- CreateTable
CREATE TABLE "public"."Member" (
    "memberId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "memberShipDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("memberId")
);

-- CreateTable
CREATE TABLE "public"."Borrow" (
    "borrowId" TEXT NOT NULL,
    "borrowDate" TIMESTAMP(3) NOT NULL,
    "returnDate" TIMESTAMP(3) NOT NULL,
    "memberId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,

    CONSTRAINT "Borrow_pkey" PRIMARY KEY ("borrowId")
);

-- AddForeignKey
ALTER TABLE "public"."Borrow" ADD CONSTRAINT "Borrow_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "public"."Member"("memberId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Borrow" ADD CONSTRAINT "Borrow_borrowId_fkey" FOREIGN KEY ("borrowId") REFERENCES "public"."Book"("bookId") ON DELETE RESTRICT ON UPDATE CASCADE;
