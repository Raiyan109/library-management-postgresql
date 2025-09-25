import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { UserServices } from "./user.service";

const signUp = catchAsync(async (req: Request, res: Response) => {
  // const user = req.user;
  const result = await UserServices.signUpService(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User signed up successfully",
    data: result,
  });
});

export const UserControllers = {
  signUp,
};