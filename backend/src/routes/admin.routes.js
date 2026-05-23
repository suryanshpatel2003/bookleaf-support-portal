const express = require("express");

const router = express.Router();

const protect = require("../middlewares/auth.middleware");

const authorizeRoles = require("../middlewares/role.middleware");

const {
  getAdminDashboard,
} = require("../controllers/admin.controller");

router.get(
  "/dashboard",
  protect,
  authorizeRoles("admin"),
  getAdminDashboard
);

module.exports = router;