INSERT INTO products (id, name, stock, price, category, on_sale)
VALUES (100, 'New product', 13, 3, 'home', 0);

SELECT COUNT(*) AS total FROM products WHERE category = 'home';
