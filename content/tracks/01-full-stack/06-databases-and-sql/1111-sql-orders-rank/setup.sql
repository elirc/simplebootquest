CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  code TEXT NOT NULL,
  total_cents INTEGER NOT NULL,
  items INTEGER NOT NULL,
  status TEXT NOT NULL,
  country TEXT NOT NULL
);

INSERT INTO orders (id, code, total_cents, items, status, country) VALUES
  (1, 'A-100', 7575, 9, 'paid', 'US'),
  (2, 'A-101', 18219, 6, 'cancelled', 'DE'),
  (3, 'E-500', 12042, 3, 'paid', 'UK'),
  (4, 'B-201', 9244, 2, 'paid', 'US'),
  (5, 'E-501', 13501, 8, 'shipped', 'UK'),
  (6, 'C-300', 20866, 7, 'pending', 'DE'),
  (7, 'A-102', 3144, 6, 'shipped', 'DE'),
  (8, 'D-401', 4387, 7, 'shipped', 'US'),
  (9, 'C-302', 2329, 4, 'pending', 'US');

CREATE TABLE order_events (
  id INTEGER PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES orders(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO order_events (id, order_id, kind, amount, day) VALUES
  (1, 2, 'view', 10, 4),
  (2, 3, 'share', 3, 4),
  (3, 3, 'share', 16, 18),
  (4, 6, 'view', 11, 23),
  (5, 7, 'share', 10, 3),
  (6, 7, 'view', 5, 4),
  (7, 7, 'view', 4, 8),
  (8, 8, 'like', 8, 10),
  (9, 9, 'view', 9, 18);
