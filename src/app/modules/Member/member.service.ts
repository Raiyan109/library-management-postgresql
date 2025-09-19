import prisma from "../../../shared/prisma";
import { IMember } from "./member.interface";

const createMemberService = async (payload: IMember) => {
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
