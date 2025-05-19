import "dotenv/config";
import express from "express";
import authorRouter from "./routes/authorRouter.js";
import bookRouter from "./routes/bookRouter.js";
import indexRouter from "./routes/indexRouter.js";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.get("/", (req, res) => {
  res.render("index", { message: "EJS rocks!" });
});

app.use((err, req, res, next) => {
  // console.log("SERVER ERROR!");
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}`);
});
