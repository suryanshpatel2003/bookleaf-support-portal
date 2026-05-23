const { body } = require("express-validator");

exports.ticketValidator = [
  body("subject").notEmpty(),
  body("description").notEmpty(),
];