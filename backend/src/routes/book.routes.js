const express = require("express");

const router = express.Router();

const protect = require("../middlewares/auth.middleware");

const {
  getMyBooks,
} = require("../controllers/book.controller");

router.get(
  "/my-books",
  protect,
  getMyBooks
);

module.exports = router;