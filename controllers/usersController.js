// controllers/usersController.js
import usersStorage from "../storages/usersStorage.js";
import { body, validationResult } from "express-validator";

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";

const validateUser = [
  body("firstName")
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body("lastName")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),
];

function usersListGet(req, res) {
  res.render("users/index", {
    title: "User list",
    users: usersStorage.getUsers(),
  });
}

function usersCreateGet(req, res) {
  console.log("*** usersCreateGet");
  res.render("users/createUser", {
    title: "Create user",
  });
}

// We can pass an entire array of middleware validations to our controller.
const usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("users/createUser", {
        title: "Create user",
        errors: errors.array(),
      });
    }
    const { firstName, lastName } = req.body;
    usersStorage.addUser({ firstName, lastName });
    res.redirect("/");
  },
];

function usersUpdateGet(req, res) {
  const user = usersStorage.getUser(req.params.id);
  res.render("users/updateUser", {
    title: "Update user",
    user: user,
  });
}

const usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("users/updateUser", {
        title: "Update user",
        user: user,
        errors: errors.array(),
      });
    }
    const { firstName, lastName } = req.body;
    usersStorage.updateUser(req.params.id, { firstName, lastName });
    res.redirect("/");
  },
];

export default {
  usersListGet,
  usersCreateGet,
  usersCreatePost,
  usersUpdateGet,
  usersUpdatePost,
};
