import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { MemeberServices } from "./member.service";
import httpStatus from "http-status";
import { Request, Response } from "express";

const createMember = catchAsync(async (req: Request, res: Response) => {
  // const user = req.user;
  const result = await MemeberServices.createMemberService(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member created successfully",
    data: result,
  });
});

export const MemberControllers = {
  createMember,
};
