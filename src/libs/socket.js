const socket = require("socket.io");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const {
  ERROR_MESSAGES,
  STATUS_CODES,
  USER_TYPE,
} = require("../config/appConstants");
const { AuthFailedError } = require("../utils/errors");
const { Token, User } = require("../models");

let userCache = {};

/*

   userCache ={
       userId:socketId,
       user2Id:socketId2
   }

*/

exports.connectSocket = (server) => {
  io = socket(server, {
    cors: { origin: "*" },
  });
  io.use(function (socket, next) {
    console.log("user is trying to connect");
    if (socket.handshake.query && socket.handshake.query.token) {
      console.log("user entered");
      jwt.verify(
        socket.handshake.query.token,
        config.jwt.secret,
        async function (err, decoded) {
          if (err) {
            throw new AuthFailedError(
              ERROR_MESSAGES.AUTHENTICATION_FAILED,
              STATUS_CODES.AUTH_FAILED
            );
          }
          const token = await Token.findOne({
            token: socket.handshake.query.token,
          }).lean();
          socket.decoded = decoded;
          socket.decoded.user = token.user ?? token.doctor ?? token.admin;
          let value = socket.decoded.user;
          if (!userCache[value]) {
            userCache[value] = [socket.id];
          } else {
            userCache[value].push(socket.id);
          }
          console.log("socketHolder", userCache);
          return next();
        }
      );
    } else {
      throw new AuthFailedError(
        ERROR_MESSAGES.AUTHENTICATION_FAILED,
        STATUS_CODES.AUTH_FAILED
      );
    }
  }).on("connection", (socket) => {
    socket.on("sendMessage", async (data) => {
      if (!data.message) {
        throw new AuthFailedError(
          "data is missing",
          STATUS_CODES.ACTION_FAILED
        );
      }
      console.log(data, "dataaaa meeemeemeieitttttttttt");

      const senderId = socket.decoded.user;
      let receiverId;
      if (
        JSON.stringify(data.receiver) === JSON.stringify(socket.decoded.user)
      ) {
        receiverId = data.sender;
      } else {
        receiverId = data.receiver;
      }
      const message = {
        message: data.message,
        sender: data.sender,
        receiver: receiverId,
      };
      console.log(userCache, "jjjhhbhjbhbhbbhhjbjhb");
      if (userCache[receiverId]) {
        userCache[receiverId]?.map(async (id) => {
          console.log("emitttingggg");
          io.to(id).emit("receiveMessage", message);
        });
      }
    });
    socket.on("error", function (error) {
      console.error(error, "something went wrong in socket...");
    });
    socket.on("disconnect", async (data) => {
      console.log("disconnect....", socket.id, userCache[socket.decoded.user]);

      userCache[socket.decoded.user] = userCache[socket.decoded.user].filter(
        (socketId) => socketId !== socket.id
      );
      await User.findByIdAndUpdate(
        socket.decoded.user,
        {
          $set: { isLive: false, "live.views": [] },
          $unset: { "live.description": "" },
        },
        { new: 1, lean: 1 }
      );
      console.log("disconneted", userCache);
    });
  });
};
