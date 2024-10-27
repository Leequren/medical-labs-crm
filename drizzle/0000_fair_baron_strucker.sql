CREATE TABLE IF NOT EXISTS "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(300) NOT NULL,
	"surname" varchar(300) NOT NULL,
	"middleName" varchar(300) NOT NULL,
	"role" varchar(300) NOT NULL,
	"imageUrl" varchar(300) NOT NULL,
	"dateBorn" date NOT NULL,
	"login" varchar(300) NOT NULL,
	"hashedPassword" varchar(300) NOT NULL
);
