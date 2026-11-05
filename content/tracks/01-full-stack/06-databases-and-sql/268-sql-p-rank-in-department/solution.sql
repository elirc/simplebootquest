SELECT department, name, salary,
       DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS salary_rank
FROM employees
ORDER BY department, salary_rank, name;
