import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { Request, Response } from "express";
import { BorrowServices } from "./borrow.service";

const borrow = catchAsync(async (req: Request, res: Response) => {
  const borrowData = {
    ...req.body,
    borrowDate: Date.now(),
  };
  const result = await BorrowServices.borrowService(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});

export const BorrowControllers = {
  borrow,
};
