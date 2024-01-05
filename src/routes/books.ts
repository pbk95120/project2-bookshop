import express, { Router } from "express";
import { allBooks, bookDetail } from "../controller/BookController";

const router: Router = express.Router();

router.use(express.json());

router.get("/", allBooks);
router.get("/:id", bookDetail);

module.exports = router;
