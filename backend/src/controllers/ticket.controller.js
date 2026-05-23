const Ticket = require("../models/Ticket.model");

const classifyTicket = require("../services/classification.service");

const generatePriority = require("../services/priority.service");

const generateAIResponse = require("../services/responseGenerator.service");

const createTicket = async (req, res) => {
  try {

    const {
      subject,
      description,
      bookId,
    } = req.body;

    const category = await classifyTicket(description);

    const priority = await generatePriority(description);

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

    const tickets = await Ticket.find()
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

    ticket.status = "In Progress";

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

    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    const aiReply = await generateAIResponse(ticket);

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

module.exports = {
  createTicket,
  getMyTickets,
  getAllTickets,
  replyTicket,
  generateDraftReply,
};