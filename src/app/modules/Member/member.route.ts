import express from "express";
import { MemberControllers } from "./member.controller";

const router = express.Router();

router.route("/").post(MemberControllers.createMember);
//   .get(MemberControllers.findAllMembers);

router.route("/:memberId");
//   .get(MemberControllers.findMemberById)
//   .patch(MemberControllers.updateMember)
//   .delete(MemberControllers.deleteMember);

export const MemberRoutes = router;
