import prisma from "../../../shared/prisma";

const signUpService = async (payload: any) => {
//   const user = await prisma.user.create({
//     data: payload,
//   });

  return payload;
};

export const UserServices = {
  signUpService,
};