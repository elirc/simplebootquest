CREATE TABLE todos (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL CHECK (length(title) > 0),
  priority TEXT NOT NULL DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  done INTEGER NOT NULL DEFAULT 0 CHECK (done IN (0, 1)),
  owner_email TEXT NOT NULL,
  UNIQUE (owner_email, title)
);
