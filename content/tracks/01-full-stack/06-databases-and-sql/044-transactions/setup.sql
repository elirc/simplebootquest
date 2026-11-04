CREATE TABLE accounts (id INTEGER PRIMARY KEY, name TEXT, balance INTEGER NOT NULL CHECK (balance >= 0));
CREATE TABLE audit (id INTEGER PRIMARY KEY, note TEXT);
INSERT INTO accounts VALUES (1, 'Ada', 100), (2, 'Grace', 50);
