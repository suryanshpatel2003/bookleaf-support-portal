const express = require("express");

const router = express.Router();

const protect = require("../middlewares/auth.middleware");

const authorizeRoles = require("../middlewares/role.middleware");

const {
  createTicket,
  getMyTickets,
  getAllTickets,
  replyTicket,
  generateDraftReply,
} = require("../controllers/ticket.controller");

router.post(
  "/create",
  protect,
  createTicket
);

router.get(
  "/my-tickets",
  protect,
  getMyTickets
);

router.get(
  "/admin/all",
  protect,
  authorizeRoles("admin"),
  getAllTickets
);

router.post(
  "/admin/reply/:id",
  protect,
  authorizeRoles("admin"),
  replyTicket
);

router.get(
  "/admin/ai-draft/:id",
  protect,
  authorizeRoles("admin"),
  generateDraftReply
);

module.exports = router;