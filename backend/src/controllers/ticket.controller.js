const Ticket = require("../models/Ticket.model");

const classifyTicket = require("../services/classification.service");

const generatePriority = require("../services/priority.service");

const generateAIResponse = require("../services/responseGenerator.service");

const createTicket = async (req, res) => {
  try {
    const { subject, description, bookId } = req.body;

    // AI services call ho rahi hain
    let category = "General Inquiry";
    try {
      if (typeof classifyTicket === "function") {
        category = (await classifyTicket(description)) || "General Inquiry";
      }
    } catch (aiErr) {
      console.log("AI Classification failed, using fallback:", aiErr.message);
    }

    let priority = "Medium";
    try {
      if (typeof generatePriority === "function") {
        const rawPriority = await generatePriority(description);
        // Case-sensitivity fix: Make sure it exactly matches "Critical", "High", "Medium", "Low"
        if (rawPriority) {
          const formatted = rawPriority.charAt(0).toUpperCase() + rawPriority.slice(1).toLowerCase();
          if (["Critical", "High", "Medium", "Low"].includes(formatted)) {
            priority = formatted;
          }
        }
      }
    } catch (aiErr) {
      console.log("AI Priority generation failed, using fallback:", aiErr.message);
    }

    // Ticket object creation with fallback validation strings
    const ticket = await Ticket.create({
      author: req.user._id,
      book: bookId || null,
      subject,
      description,
      category,
      priority,
      messages: [
        {
          sender: "author",
          text: description,
        },
      ],
    });

    return res.status(201).json({
      success: true,
      ticket,
    });

  } catch (error) {
    console.error("CRITICAL ERROR IN CREATE TICKET:", error); // 👈 Isse terminal me exact validation crash dikhega
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMyTickets = async (req, res) => {
  try {

    const tickets = await Ticket.find({
      author: req.user._id,
    })
      .populate("book")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      tickets,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getAllTickets = async (req, res) => {
  try {

    const {
      status,
      priority,
      category,
      search,
    } = req.query;

    let filter = {};

    if (status) {
      filter.status = status;
    }

    if (priority) {
      filter.priority = priority;
    }

    if (category) {
      filter.category = category;
    }

    if (search) {
      filter.subject = {
        $regex: search,
        $options: "i",
      };
    }

    const tickets = await Ticket.find(filter)
      .populate("author", "name email")
      .populate("book", "title")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      tickets,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const replyTicket = async (req, res) => {
  try {

    const { message } = req.body;

    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    ticket.messages.push({
      sender: "admin",
      text: message,
    });

    ticket.status = "IN_PROGRESS";

    await ticket.save();

    return res.status(200).json({
      success: true,
      ticket,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const generateDraftReply = async (req, res) => {

  try {

    const ticket = await Ticket.findById(
      req.params.id
    )
      .populate("author", "name email");

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    console.log("POPULATED AUTHOR:", ticket.author);

    const aiReply =
      await generateAIResponse(ticket);

    return res.status(200).json({
      success: true,
      aiReply,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

const updateTicketStatus = async (
  req,
  res
) => {

  try {

    const { status } = req.body;

    const ticket = await Ticket.findById(
      req.params.id
    );

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    ticket.status = status;

    await ticket.save();

    return res.status(200).json({
      success: true,
      message: "Status updated",
      ticket,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

const saveInternalNote = async (
  req,
  res
) => {

  try {

    const { note } = req.body;

    const ticket = await Ticket.findById(
      req.params.id
    );

    if (!ticket) {

      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });

    }

    ticket.internalNotes = note;

    await ticket.save();

    return res.status(200).json({
      success: true,
      message: "Internal note saved",
      ticket,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

const assignTicketToMe = async (
  req,
  res
) => {

  try {

    const ticket = await Ticket.findById(
      req.params.id
    );

    if (!ticket) {

      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });

    }

    ticket.assignedTo = req.user._id;

    await ticket.save();

    return res.status(200).json({
      success: true,
      message: "Ticket assigned successfully",
      ticket,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

module.exports = {
  createTicket,
  getMyTickets,
  getAllTickets,
  replyTicket,
  generateDraftReply,
  updateTicketStatus,
  saveInternalNote,
  assignTicketToMe,
};