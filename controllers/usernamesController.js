import db from "../db/top_users/queries.js";

// import { body, validationResult } from "express-validator";

// const alphaErr = "must only contain letters.";
// const lengthErr = "must be between 1 and 10 characters.";

// const validateUsername = [
//   body("username").trim().isLength({ min: 3, max: 10 }),
// ];

async function usernamesListGet(req, res) {
  const usernames = await db.getAllUsernames();
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

function usernamesCreateGet(req, res) {
  res.render("usernames/createUsername", {
    title: "Create username",
  });
}

async function usernamesCreatePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/usernames/");
}

export default { usernamesListGet, usernamesCreateGet, usernamesCreatePost };
