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

export const MemeberServices = {
  createMemberService,
  findAllMembersService,
};
