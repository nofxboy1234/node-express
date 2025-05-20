import db from "../db/node_auth_basics/queries.js";

async function index(req, res) {
  console.log("*** req.user: ", req.user);
  res.render("auth/index", { user: req.user });
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

async function login(req, res) {
  res.render("auth/log-in");
}

async function logout(req, res, next) {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/auth");
  });
}

export default { index, newUser, create, login, logout };
