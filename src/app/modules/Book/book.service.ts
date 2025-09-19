import prisma from "../../../shared/prisma";
import { IBook } from "./book.interface";

const createBookService = async (payload: IBook) => {
  const book = await prisma.book.create({
    data: payload,
  });

  return book;
};

const findAllBooksService = async () => {
  return await prisma.book.findMany();
};

const findBookByIdService = async (bookId: string) => {
  const result = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  return result;
};

const updateBookService = async (bookId: string, payload: Partial<IBook>) => {
  // const book = await prisma.book.findUniqueOrThrow({
  //   where: {
  //     bookId: payload.bookId,
  //   },
  // });

  const result = await prisma.book.update({
    where: {
      bookId,
    },
    data: payload,
  });

  return result;
};

const deleteBookService = async (bookId: string) => {
  const result = await prisma.book.delete({
    where: {
      bookId,
    },
  });

  return result;
};

export const BookServices = {
  createBookService,
  findAllBooksService,
  findBookByIdService,
  updateBookService,
  deleteBookService,
};
