import { drizzle } from "drizzle-orm/node-postgres";
import { databaseUrl } from "./config/consts.js";
import { usersTable } from "./db/schema.js";

console.log(databaseUrl);
const db = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL,
  },
});

async function main() {
  const user: typeof usersTable.$inferInsert = {
    name: "Kirill zhopa ne bril",
    surname: "Boremskii",
    middleName: "Nikolaevich",
    role: "admin",
    imageUrl: "",
    dateBorn: new Date("1990-01-01").toUTCString(),
    login: "john.doe",
    hashedPassword: "43534534534534354345345",
  };
  await db.insert(usersTable).values(user);
  console.log("User added successfully");

  const users = await db.select().from(usersTable);
  console.log("All users:", users);
}

main().catch((err) => {
  console.error("Error", err);
});

// const app = new Hono();
// console.log(process.env);
// app.get("/", (c) => {
//   return c.text("Hello Hono!");
// });

// const port = 3000;
// console.log(`Server is running on http://localhost:${port}`);

// serve({
//   fetch: app.fetch,
//   port,
// });
