SELECT day, amount,
  SUM(amount) OVER (ORDER BY day) AS cumulative,
  amount - LAG(amount) OVER (ORDER BY day) AS change
FROM sales
ORDER BY day;
