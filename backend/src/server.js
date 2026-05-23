require("dotenv").config();

const http = require("http");
const app = require("./app");
const connectDB = require("./config/db");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    const server = http.createServer(app);

    const io = new Server(server, {
      cors: {
        origin: [
          "http://localhost:5173",
          "https://bookleaf-support-portal-eta.vercel.app",
        ],
        credentials: true,
      },
    });

    io.on("connection", (socket) => {
      console.log("Socket Connected:", socket.id);

      socket.on("disconnect", () => {
        console.log("Socket Disconnected:", socket.id);
      });
    });

    server.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

startServer();