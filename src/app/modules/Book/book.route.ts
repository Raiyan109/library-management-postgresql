import express from "express";
import { BookControllers } from "./book.controller";

const router = express.Router();

router
  .route("/")
  .post(BookControllers.createBook)
  .get(BookControllers.findAllBooks);

router
  .route("/:bookId")
  .get(BookControllers.findBookById)
  .patch(BookControllers.updateBook)
  .delete(BookControllers.deleteBook);

export const BookRoutes = router;
