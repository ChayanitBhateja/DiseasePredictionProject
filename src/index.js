const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
const CreateAdmin = require("./utils/bootstrap");
const socket = require("./libs/socket");

let server;

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  console.log("connected to MongoDB");
  CreateAdmin();
  server = app.listen(config.port, () => {
    console.log(`Listening to port ${config.port}`);
  });
  socket.connectSocket(server);
});

const unexpectedErrorHandler = (error) => {
  console.error(error);
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  console.info("SIGTERM received");
  if (server) {
    server.close();
  }
});
