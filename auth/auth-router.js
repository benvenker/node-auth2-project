const express = require("express");
const Users = require("../users/users-model");

const router = express.Router();

router.post("/login", (req, res) => {
  console.log("Logged in");
});

router.post("/register", (req, res) => {
  console.log("Registered!");
});

module.exports = router;
