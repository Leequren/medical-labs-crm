import type { Config } from "drizzle-kit";

console.log(process.env.DATABASE_URL);

const config: Config = {
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};

export default config;
