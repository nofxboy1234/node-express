import pool from "./pool.js";

async function insertAuthUser(username, password) {
  await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
    username,
    password,
  ]);
}

async function findAuthUserByUsername(username) {
  const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  const user = rows[0];
  return user;
}

async function findAuthUserById(id) {
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  const user = rows[0];
  return user;
}

export default { insertAuthUser, findAuthUserByUsername, findAuthUserById };
