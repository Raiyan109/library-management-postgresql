"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router
    .route("/")
    .post(book_controller_1.BookControllers.createBook)
    .get(book_controller_1.BookControllers.findAllBooks);
router
    .route("/:bookId")
    .get(book_controller_1.BookControllers.findBookById)
    .patch(book_controller_1.BookControllers.updateBook)
    .delete(book_controller_1.BookControllers.deleteBook);
exports.BookRoutes = router;
//# sourceMappingURL=book.route.js.map