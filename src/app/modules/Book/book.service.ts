
import prisma from "../../../shared/prisma";
import { IBook } from "./book.interface";

const createBookService = async (payload: IBook) => {
  console.log(payload, 'payload from book service');
  const book = await prisma.book.create({
    data: payload
  })
  
  return book
};

export const BookServices = {
  createBookService,
};
