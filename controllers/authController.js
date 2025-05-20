import db from "../db/node_auth_basics/queries.js";

async function index(req, res) {
  res.render("auth/index");
}

async function newUser(req, res) {
  res.render("auth/sign-up-form");
}

async function create(req, res, next) {
  try {
    const { username, password } = req.body;
    await db.insertAuthUser(username, password);
    res.redirect("/auth");
  } catch (err) {
    return next(err);
  }
}

export default { index, newUser, create };
