const express = require("express");

const cors = require("cors");

const morgan = require("morgan");

const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");

const bookRoutes = require("./routes/book.routes");

const ticketRoutes = require("./routes/ticket.routes");

const authorRoutes = require("./routes/author.routes");

const adminRoutes = require("./routes/admin.routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "BookLeaf Backend Running",
  });
});

app.use("/api/auth", authRoutes);

app.use("/api/books", bookRoutes);

app.use("/api/tickets", ticketRoutes);

app.use("/api/author", authorRoutes);

app.use("/api/admin", adminRoutes);

module.exports = app;