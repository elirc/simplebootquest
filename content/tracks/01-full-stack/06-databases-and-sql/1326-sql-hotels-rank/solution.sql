SELECT city, name, nightly_price,
  RANK() OVER (PARTITION BY city ORDER BY nightly_price DESC) AS rank
FROM hotels
ORDER BY city, rank, name;
