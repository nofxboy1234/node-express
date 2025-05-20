import { Pool } from "pg";

export default new Pool({
  host: "localhost",
  user: "dylan",
  database: "top_users",
  password: "dlp*FS&84",
  port: 5432,
  // connectionString: "postgresql://dylan:dlp*FS&84@localhost:5432/top_users",
});
