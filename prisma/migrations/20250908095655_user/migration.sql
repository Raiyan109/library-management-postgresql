-- CreateEnum
CREATE TYPE "public"."UserStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "public"."User" (
    "user_name" TEXT NOT NULL,
    "user_phone" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_password" TEXT NOT NULL,
    "confirm_password" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'USER',
    "user_profile" TEXT,
    "user_address" TEXT,
    "user_status" "public"."UserStatus" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_name")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_phone_key" ON "public"."User"("user_phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_email_key" ON "public"."User"("user_email");
