import "dotenv/config";
import express from "express";
import authorRouter from "./routes/authorRouter.js";
import bookRouter from "./routes/bookRouter.js";
import indexRouter from "./routes/indexRouter.js";
import usersRouter from "./routes/usersRouter.js";
import path from "node:path";
import { fileURLToPath } from "url";
import usernamesRouter from "./routes/usernamesRouter.js";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import authRouter from "./routes/authRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());

app.use("/authors", authorRouter);
app.use("/books", bookRouter);

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];
const users = ["Rose", "Cake", "Biff"];
// app.get("/", (req, res) => {
//   res.render("index", { links: links, users: users });
// });
app.use("/", usersRouter);
app.use("/usernames", usernamesRouter);
app.use("/auth", authRouter);

app.use((err, req, res, next) => {
  console.log("SERVER ERROR!");
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}`);
});
