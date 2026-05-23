const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: String,

    isbn: String,

    genre: String,

    publicationDate: Date,

    status: String,

    mrp: Number,

    totalCopiesSold: {
      type: Number,
      default: 0,
    },

    totalRoyaltyEarned: {
      type: Number,
      default: 0,
    },

    royaltyPaid: {
      type: Number,
      default: 0,
    },

    royaltyPending: {
      type: Number,
      default: 0,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);