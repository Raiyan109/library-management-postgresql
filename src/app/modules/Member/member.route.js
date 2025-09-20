"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRoutes = void 0;
const express_1 = __importDefault(require("express"));
const member_controller_1 = require("./member.controller");
const router = express_1.default.Router();
router
    .route("/")
    .post(member_controller_1.MemberControllers.createMember)
    .get(member_controller_1.MemberControllers.findAllMembers);
router
    .route("/:memberId")
    .get(member_controller_1.MemberControllers.findMemberById)
    .patch(member_controller_1.MemberControllers.updateMember)
    .delete(member_controller_1.MemberControllers.deleteMember);
exports.MemberRoutes = router;
//# sourceMappingURL=member.route.js.map