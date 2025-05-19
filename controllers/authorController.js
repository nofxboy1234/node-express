import db from "../db.js";
import asyncHandler from "express-async-handler";
import CustomNotFoundError from "../errors/CustomNotFoundError.js";

const getAuthorById = asyncHandler(async (req, res) => {
  // throw new Error("OH NO!");
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError("Author not found!");
  }

  res.send(`Author Name: ${author.name}`);
});

export { getAuthorById };
