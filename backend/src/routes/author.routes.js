const express = require("express");

const router = express.Router();

const protect = require("../middlewares/auth.middleware");

const {
  getAuthorDashboard,
} = require("../controllers/author.controller");

router.get("/dashboard", protect, getAuthorDashboard);

module.exports = router;