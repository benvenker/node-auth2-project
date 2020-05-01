require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const usersRouter = require("./users/users-router");
const authRouter = require("./auth/auth-router");
const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(cookieParser());

server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);

module.exports = server;
