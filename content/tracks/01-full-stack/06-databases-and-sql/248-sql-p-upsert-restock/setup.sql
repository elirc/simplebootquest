CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  city TEXT,
  created_at TEXT NOT NULL
);

CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  sku TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price_cents INTEGER NOT NULL,
  stock INTEGER NOT NULL
);

CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL REFERENCES customers(id),
  status TEXT NOT NULL CHECK (status IN ('pending', 'paid', 'shipped', 'cancelled')),
  created_at TEXT NOT NULL
);

CREATE TABLE order_items (
  id INTEGER PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES orders(id),
  product_id INTEGER NOT NULL REFERENCES products(id),
  quantity INTEGER NOT NULL,
  unit_price_cents INTEGER NOT NULL
);

INSERT INTO customers (id, name, email, city, created_at) VALUES
  (1, 'Ada', 'ada@shop.test', 'London', '2025-11-02'),
  (2, 'Grace', 'grace@shop.test', 'New York', '2025-11-20'),
  (3, 'Linus', 'linus@shop.test', 'Helsinki', '2025-12-05'),
  (4, 'Margaret', 'margaret@shop.test', NULL, '2026-01-10'),
  (5, 'Alan', 'alan@shop.test', 'London', '2026-01-18'),
  (6, 'Katherine', 'katherine@shop.test', NULL, '2026-02-01');

INSERT INTO products (id, sku, name, category, price_cents, stock) VALUES
  (1, 'KB-01', 'Mechanical Keyboard', 'peripherals', 8900, 12),
  (2, 'MS-01', 'Wireless Mouse', 'peripherals', 2900, 40),
  (3, 'MN-27', '27" Monitor', 'displays', 24900, 3),
  (4, 'MN-24', '24" Monitor', 'displays', 15900, 0),
  (5, 'CB-C', 'USB-C Cable', 'accessories', 1200, 150),
  (6, 'HB-07', '7-Port Hub', 'accessories', 3400, 4),
  (7, 'DK-01', 'Laptop Dock', 'accessories', 12900, 0),
  (8, 'HS-01', 'Headset', 'audio', 6900, 8);

INSERT INTO orders (id, customer_id, status, created_at) VALUES
  (1, 1, 'shipped', '2025-12-01'),
  (2, 2, 'paid', '2025-12-14'),
  (3, 1, 'paid', '2026-01-03'),
  (4, 3, 'cancelled', '2026-01-09'),
  (5, 2, 'shipped', '2026-01-21'),
  (6, 5, 'pending', '2026-01-28'),
  (7, 3, 'paid', '2026-02-02'),
  (8, 1, 'pending', '2026-02-11'),
  (9, 5, 'shipped', '2026-02-15'),
  (10, 2, 'pending', '2026-02-20');

INSERT INTO order_items (id, order_id, product_id, quantity, unit_price_cents) VALUES
  (1, 1, 1, 1, 8900),
  (2, 1, 5, 3, 1200),
  (3, 2, 3, 1, 24900),
  (4, 2, 2, 1, 2900),
  (5, 3, 8, 2, 6900),
  (6, 4, 3, 1, 24900),
  (7, 5, 5, 5, 1100),
  (8, 5, 6, 1, 3400),
  (9, 5, 2, 2, 2900),
  (10, 6, 1, 1, 8900),
  (11, 7, 3, 2, 23900),
  (12, 7, 5, 2, 1200),
  (13, 8, 2, 1, 2900),
  (14, 9, 8, 1, 6900),
  (15, 9, 5, 10, 1000),
  (16, 10, 1, 1, 8900),
  (17, 10, 6, 2, 3400);
