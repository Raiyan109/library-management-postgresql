import express from "express";
import { BookControllers } from "./book.controller";

const router = express.Router();

router
  .route("/")
  .post(BookControllers.createBook)
  .get(BookControllers.findAllBooks);

router.get("/:bookId", BookControllers.findBookById);

export const BookRoutes = router;
