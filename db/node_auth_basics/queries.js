import pool from "./pool.js";

async function insertAuthUser(username, password) {
  await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
    username,
    password,
  ]);
}

export default { insertAuthUser };
