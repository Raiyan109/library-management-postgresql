import prisma from "../../../shared/prisma";
import ApiError from "../../errors/ApiError";
import { IMember } from "./member.interface";
import httpStatus from "http-status";

const createMemberService = async (payload: any) => {
  // If you want to check for existing member by phone, use findFirst instead of findUnique
  const existingMember = await prisma.member.findFirst({
    where: {
      phone: payload?.phone,
    },
  });

  if (existingMember) {
    throw new ApiError(httpStatus.BAD_REQUEST,"Member with this phone already exists");
  }
  console.log(existingMember);

  const member = await prisma.member.create({
    data: payload,
  });

  return member;
};

const findAllMembersService = async () => {
  return await prisma.member.findMany();
};

const findMemberByIdService = async (memberId: string) => {
  const result = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });

  return result;
};

const updateMemberService = async (
  memberId: string,
  payload: Partial<IMember>
) => {
  // const Member = await prisma.Member.findUniqueOrThrow({
  //   where: {
  //     memberId: payload.memberId,
  //   },
  // });

  const result = await prisma.member.update({
    where: {
      memberId,
    },
    data: payload,
  });

  return result;
};

const deleteMemberService = async (memberId: string) => {
  const result = await prisma.member.delete({
    where: {
      memberId,
    },
  });

  return result;
};

export const MemeberServices = {
  createMemberService,
  findAllMembersService,
  findMemberByIdService,
  updateMemberService,
  deleteMemberService,
};
