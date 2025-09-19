import express from "express";
import { BookControllers } from "./book.controller";

const router = express.Router();

router.route("/")
.post(BookControllers.createBook)
.get(BookControllers.findAllBooks);

export const BookRoutes = router;
