const express = require("express");

const router = express.Router();

const protect = require("../middlewares/auth.middleware");

const authorizeRoles = require("../middlewares/role.middleware");

const authorize = require(
  "../middlewares/role.middleware"
);
const {
  createTicket,
  getMyTickets,
  getAllTickets,
  replyTicket,
  generateDraftReply,
  updateTicketStatus,
  saveInternalNote,
assignTicketToMe,
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

router.put(
  "/admin/status/:id",
  protect,
  authorize("admin"),
  updateTicketStatus
);

router.put(
  "/admin/internal-note/:id",
  protect,
  authorize("admin"),
  saveInternalNote
);

router.put(
  "/admin/assign/:id",
  protect,
  authorize("admin"),
  assignTicketToMe
);


module.exports = router;