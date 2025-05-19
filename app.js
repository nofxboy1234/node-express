import "dotenv/config";
import express from "express";
import authorRouter from "./routes/authorRouter.js";
import bookRouter from "./routes/bookRouter.js";
import indexRouter from "./routes/indexRouter.js";

const app = express();

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

// app.use((req, res, next) => {
//   throw new Error("OH NO!");
// });

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

// app.get("/", (req, res) => res.send("Hello, world!"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}`);
});
