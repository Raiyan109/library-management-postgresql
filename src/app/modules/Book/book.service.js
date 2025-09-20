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
exports.BookServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createBookService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.create({
        data: payload,
    });
    return book;
});
const findAllBooksService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.book.findMany();
});
const findBookByIdService = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.findUnique({
        where: {
            bookId,
        },
    });
    return result;
});
const updateBookService = (bookId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // const book = await prisma.book.findUniqueOrThrow({
    //   where: {
    //     bookId: payload.bookId,
    //   },
    // });
    const result = yield prisma_1.default.book.update({
        where: {
            bookId,
        },
        data: payload,
    });
    return result;
});
const deleteBookService = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.book.delete({
        where: {
            bookId,
        },
    });
    return result;
});
exports.BookServices = {
    createBookService,
    findAllBooksService,
    findBookByIdService,
    updateBookService,
    deleteBookService,
};
//# sourceMappingURL=book.service.js.map