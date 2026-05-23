const Book = require("../models/Book.model");

const getMyBooks = async (req, res) => {
  try {

    const books = await Book.find({
      author: req.user._id,
    });

    return res.status(200).json({
      success: true,
      books,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getMyBooks,
};