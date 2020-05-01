const bcrypt = require("bcryptjs");
const db = require("../data/db-config");

module.exports = {
  find,
  add,
  findBy,
};

function find() {
  return db("users").select("id", "username", "password");
}

function add(user) {
  return db("users").insert(user);
}

function findBy(filter) {
  return db("users").select("id", "username", "password").where(filter);
}
