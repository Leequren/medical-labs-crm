import { date, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 300 }).notNull(),
  surname: varchar({ length: 300 }).notNull(),
  middleName: varchar({ length: 300 }).notNull(),
  role: varchar({ length: 300 }).notNull(),
  imageUrl: varchar({ length: 300 }).notNull(),
  dateBorn: date().notNull(),
  login: varchar({ length: 300 }).notNull(),
  hashedPassword: varchar({ length: 300 }).notNull(),
});
