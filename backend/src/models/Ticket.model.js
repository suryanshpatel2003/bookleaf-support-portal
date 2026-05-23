const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: String,

      enum: [
        "author",
        "admin",
      ],

      required: true,
    },

    text: {
      type: String,

      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ticketSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "User",

      required: true,
    },

    book: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "Book",

      default: null,
    },

    subject: {
      type: String,

      required: true,

      trim: true,
    },

    description: {
      type: String,

      required: true,

      trim: true,
    },

    category: {
      type: String,

      default: "General Inquiry",
    },

    priority: {
      type: String,

      enum: [
        "Critical",
        "High",
        "Medium",
        "Low",
      ],

      default: "Medium",
    },

    status: {
      type: String,

      enum: [
        "OPEN",
        "IN_PROGRESS",
        "RESOLVED",
        "CLOSED",
      ],

      default: "OPEN",
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "User",

      default: null,
    },

    internalNotes: {
      type: String,

      default: "",
    },

    messages: [messageSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Ticket",
  ticketSchema
);