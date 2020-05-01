require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(cookieParser());

module.exports = server;
