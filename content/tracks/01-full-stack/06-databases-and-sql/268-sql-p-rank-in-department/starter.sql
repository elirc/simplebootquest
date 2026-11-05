SELECT department, name, salary, RANK() OVER (ORDER BY salary DESC) AS salary_rank FROM employees;
