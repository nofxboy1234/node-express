import db from "../db.js";
import asyncHandler from "express-async-handler";

const getAuthorById = asyncHandler(async (req, res) => {
  // throw new Error("OH NO!");
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    res.status(404).send("Author not found");
    return;
  }

  res.send(`Author Name: ${author.name}`);
});

export { getAuthorById };
