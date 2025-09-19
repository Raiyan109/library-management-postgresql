import prisma from "../../../shared/prisma";

const borrowService = async (payload: any) => {
  const borrow = await prisma.borrow.create({
    data: payload,
  });

  return borrow;
};

export const BorrowServices = {
  borrowService,
};
