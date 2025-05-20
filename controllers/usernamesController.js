// import { body, validationResult } from "express-validator";

// const alphaErr = "must only contain letters.";
// const lengthErr = "must be between 1 and 10 characters.";

// const validateUsername = [
//   body("username").trim().isLength({ min: 3, max: 10 }),
// ];

function usernamesListGet(req, res) {
  console.log("usernames will be logged  here - wip");
}

function usernamesCreateGet(req, res) {
  res.render("usernames/createUsername", {
    title: "Create username",
  });
}

function usernamesCreatePost(req, res) {
  console.log("username to be saved: ", req.body.username);
}

export default { usernamesListGet, usernamesCreateGet, usernamesCreatePost };
