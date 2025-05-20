import { Pool } from "pg";

export default new Pool({
  host: "localhost",
  user: "dylan",
  database: "node_auth_basics",
  password: "dlp*FS&84",
  port: 5432,
  // connectionString: "postgresql://dylan:dlp*FS&84@localhost:5432/node_auth_basics",
});
