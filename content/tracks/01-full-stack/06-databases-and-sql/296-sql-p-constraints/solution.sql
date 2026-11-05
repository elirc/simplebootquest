CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  username TEXT NOT NULL CHECK (length(username) BETWEEN 3 AND 20),
  role TEXT NOT NULL DEFAULT 'member' CHECK (role IN ('member', 'admin')),
  age INTEGER CHECK (age >= 13)
);
