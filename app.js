import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}`);
});
