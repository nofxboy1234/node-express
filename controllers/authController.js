import db from "../db/queries.js";

async function index(req, res) {
  res.render("auth/index");
}

async function newUser(req, res) {
  res.render("auth/sign-up-form");
}

async function create(req, res) {
  res.render("auth/sign-up-form");
}

export default { index, newUser, create };
