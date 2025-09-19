import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { BookServices } from "./book.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createBook = catchAsync(async (req: Request, res: Response) => {
  // const user = req.user;
  const result = await BookServices.createBookService(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book created successfully",
    data: result,
  });
});

const findAllBooks = catchAsync(async (req: Request, res: Response) => {
  // const user = req.user;
  const result = await BookServices.findAllBooksService();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});

const findBookById = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;

  if (!bookId) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: "bookId parameter is required",
      data: null,
    });
  }

  const result = await BookServices.findBookByIdService(bookId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book retrieved successfully",
    data: result,
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;

  if (!bookId) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: "bookId parameter is required",
      data: null,
    });
  }

  const result = await BookServices.updateBookService(bookId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;

  if (!bookId) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: "bookId parameter is required",
      data: null,
    });
  }

  const result = await BookServices.deleteBookService(bookId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book deleted successfully",
    data: result,
  });
});

export const BookControllers = {
  createBook,
  findAllBooks,
  findBookById,
  updateBook,
  deleteBook,
};
