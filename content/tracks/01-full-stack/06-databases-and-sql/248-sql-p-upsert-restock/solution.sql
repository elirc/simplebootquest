INSERT INTO products (sku, name, category, price_cents, stock) VALUES
  ('MN-24', '24" Monitor', 'displays', 15900, 10),
  ('HB-07', '7-Port Hub', 'accessories', 3400, 6),
  ('WC-01', 'Webcam', 'peripherals', 5900, 20)
ON CONFLICT (sku) DO UPDATE SET stock = products.stock + excluded.stock;
