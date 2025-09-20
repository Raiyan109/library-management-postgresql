import prisma from "../../../shared/prisma";

const borrowService = async (payload: any) => {
  const borrow = await prisma.borrow.create({
    data: payload,
  });

  return borrow;
};

const returnService = async (payload: any) => {
  const returnedBook = await prisma.borrow.create({
    data: payload,
  });

  return returnedBook;
};

export const BorrowServices = {
  borrowService,
};
