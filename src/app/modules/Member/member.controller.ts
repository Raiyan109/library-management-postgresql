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

const findAllMembers = catchAsync(async (req: Request, res: Response) => {
  // const user = req.user;
  const result = await MemeberServices.findAllMembersService();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Members retrieved successfully",
    data: result,
  });
});

const findMemberById = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;

  if (!memberId) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: "memberId parameter is required",
      data: null,
    });
  }

  const result = await MemeberServices.findMemberByIdService(memberId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member retrieved successfully",
    data: result,
  });
});

const updateMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;

  if (!memberId) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: "memberId parameter is required",
      data: null,
    });
  }

  const result = await MemeberServices.updateMemberService(memberId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member updated successfully",
    data: result,
  });
});

const deleteMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;

  if (!memberId) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: "memberId parameter is required",
      data: null,
    });
  }

  const result = await MemeberServices.deleteMemberService(memberId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member deleted successfully",
    data: result,
  });
});

export const MemberControllers = {
  createMember,
  findAllMembers,
  findMemberById,
  updateMember,
  deleteMember,
};
