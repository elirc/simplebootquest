CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  stock INTEGER NOT NULL,
  category TEXT NOT NULL,
  on_sale INTEGER NOT NULL
);

INSERT INTO products (id, name, price, stock, category, on_sale) VALUES
  (1, 'Monitor Arm', 116, 5, 'home', 1),
  (2, 'Headphones', 89, 29, 'tech', 0),
  (3, 'Plant Pot', 44, 60, 'tech', 1),
  (4, 'Notebook', 37, 57, 'office', 1),
  (5, 'Water Bottle', 50, 12, 'tech', 1),
  (6, 'Desk Lamp', 28, 2, 'home', 0),
  (7, 'Pen Set', 63, 4, 'home', 1),
  (8, 'USB Hub', 61, 16, 'tech', 1),
  (9, 'Mouse Pad', 112, 13, 'tech', 1);

CREATE TABLE product_events (
  id INTEGER PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES products(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO product_events (id, product_id, kind, amount, day) VALUES
  (1, 1, 'view', 16, 3),
  (2, 1, 'view', 7, 24),
  (3, 2, 'share', 12, 1),
  (4, 2, 'share', 5, 16),
  (5, 2, 'like', 8, 15),
  (6, 3, 'view', 7, 25),
  (7, 3, 'like', 8, 24),
  (8, 5, 'like', 1, 8),
  (9, 5, 'like', 15, 6),
  (10, 5, 'like', 9, 4),
  (11, 7, 'like', 10, 18),
  (12, 7, 'share', 16, 5),
  (13, 9, 'share', 15, 14),
  (14, 9, 'share', 14, 1);
