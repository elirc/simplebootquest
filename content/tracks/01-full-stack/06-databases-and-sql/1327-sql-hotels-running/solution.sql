SELECT id, nightly_price,
  SUM(nightly_price) OVER (ORDER BY id) AS running_total
FROM hotels
ORDER BY id;
