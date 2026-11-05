INSERT INTO plants (id, name, water_every_days, height_cm, light, pet_safe)
VALUES (100, 'New plant', 9, 5, 'bright', 0);

SELECT COUNT(*) AS total FROM plants WHERE light = 'bright';
