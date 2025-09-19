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
  console.log(bookId, "bookId book service");
  const result = await prisma.book.findUnique({
    where: {
      bookId
    }
  })

  return result;
};

export const BookServices = {
  createBookService,
  findAllBooksService,
  findBookByIdService,
};
