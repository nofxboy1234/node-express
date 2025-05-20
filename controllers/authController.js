import db from "../db/queries.js";

async function index(req, res) {
  res.render("auth/index");
}

export default { index };
