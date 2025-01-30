import config from "@/lib/config"
import { drizzle } from 'drizzle-orm/neon-http';
// import { drizzle } from 'drizzle-orm/node-postgres';
import { neon } from "@neondatabase/serverless"

const sql = neon(config.env.databaseUrl);
export const db = drizzle({ client: sql})

// import { Pool } from "pg";
// const pool = new Pool({ connectionString: config.env.databaseUrl,});
//
//
// export const db = drizzle({ client: pool });
