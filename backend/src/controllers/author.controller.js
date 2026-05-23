const User = require("../models/User.model");
const Book = require("../models/Book.model");
const Ticket = require("../models/Ticket.model");

const getAuthorDashboard = async (req, res) => {
  try {

    const books = await Book.find({
      author: req.user._id,
    });

    const tickets = await Ticket.find({
      author: req.user._id,
    });

    const totalRoyalty = books.reduce(
      (acc, book) => acc + book.totalRoyaltyEarned,
      0
    );

    return res.status(200).json({
      success: true,
      stats: {
        totalBooks: books.length,
        totalTickets: tickets.length,
        totalRoyalty,
      },
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAuthorDashboard,
};