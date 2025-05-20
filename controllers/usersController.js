// controllers/usersController.js
import usersStorage from "../storages/usersStorage.js";

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

function usersCreatePost(req, res) {
  const { firstName, lastName } = req.body;
  usersStorage.addUser({ firstName, lastName });
  res.redirect("/");
}

export default { usersListGet, usersCreateGet, usersCreatePost };
