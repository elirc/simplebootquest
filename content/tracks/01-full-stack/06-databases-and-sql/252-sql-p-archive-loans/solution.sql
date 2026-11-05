BEGIN;
CREATE TABLE archived_loans (
  id INTEGER PRIMARY KEY,
  book_id INTEGER NOT NULL,
  member_id INTEGER NOT NULL,
  borrowed_on TEXT NOT NULL,
  returned_on TEXT NOT NULL
);
INSERT INTO archived_loans (id, book_id, member_id, borrowed_on, returned_on)
SELECT id, book_id, member_id, borrowed_on, returned_on FROM loans WHERE returned_on IS NOT NULL;
DELETE FROM loans WHERE returned_on IS NOT NULL;
COMMIT;
