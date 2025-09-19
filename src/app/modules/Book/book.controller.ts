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

export const BookControllers = {
  createBook,
};
