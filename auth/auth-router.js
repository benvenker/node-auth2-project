const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../users/users-model");

const router = express.Router();

router.post("/login", async (req, res, next) => {
  const authError = {
    message: "Invalid credential",
  };

  try {
    const { username, password } = req.body;

    const user = await Users.findBy({ username }).first();
    if (!user) {
      return res.status(400).json(authError);
    }

    const payload = {
      userId: user.id,
      userRole: "admin",
    };

    // generate a new JWT
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    // sends a Set-Cookie header witth the value of the token
    res.cookie("token", token);

    res.json({
      message: `Welcome ${user.username}`,
    });
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);

  user.password = hash;

  try {
    const { username } = req.body;
    const user = await Users.findBy({ username }).first();

    if (user) {
      return res.status(400).json({
        message: "You shall not pass!",
      });
    }

    res.status(201).json(await Users.add(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
