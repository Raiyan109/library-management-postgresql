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
exports.BorrowServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const borrowService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const borrow = yield prisma_1.default.borrow.create({
        data: payload,
    });
    return borrow;
});
const returnService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const returnedBook = yield prisma_1.default.borrow.create({
        data: payload,
    });
    return returnedBook;
});
exports.BorrowServices = {
    borrowService,
};
//# sourceMappingURL=borrow.service.js.map