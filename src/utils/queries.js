export const createAgentTable = `
DROP TABLE IF EXISTS agents;
CREATE TABLE "agents" (
  "id" serial primary key,
  "email" varchar (200) UNIQUE NOT NULL,
  "first_name" varchar (200) NOT NULL,
 "last_name" varchar (200) NOT NULL,
 "phone_number" varchar (11) NOT NULL,
  "password" varchar (160) NOT NULL
  )
  `;
