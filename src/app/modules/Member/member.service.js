"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemeberServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createMemberService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield prisma_1.default.member.create({
        data: payload,
    });
    return member;
});
const findAllMembersService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.member.findMany();
});
const findMemberByIdService = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.findUnique({
        where: {
            memberId,
        },
    });
    return result;
});
const updateMemberService = (memberId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // const Member = await prisma.Member.findUniqueOrThrow({
    //   where: {
    //     memberId: payload.memberId,
    //   },
    // });
    const result = yield prisma_1.default.member.update({
        where: {
            memberId,
        },
        data: payload,
    });
    return result;
});
const deleteMemberService = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.member.delete({
        where: {
            memberId,
        },
    });
    return result;
});
exports.MemeberServices = {
    createMemberService,
    findAllMembersService,
    findMemberByIdService,
    updateMemberService,
    deleteMemberService,
};
//# sourceMappingURL=member.service.js.map