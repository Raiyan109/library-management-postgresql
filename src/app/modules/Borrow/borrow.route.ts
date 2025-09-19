import express from "express";
import { BorrowControllers } from "./borrow.controller";

const router = express.Router();

router
  .route("/")
  .post(BorrowControllers.borrow)


export const BorrowRoutes = router;
