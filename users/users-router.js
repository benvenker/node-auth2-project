const express = require("express");

const Users = require("./users-model");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("endpoint hit");
  Users.find().then((users) => res.status(200).json(users));
});

module.exports = router;
