const round1 = (n) => Math.round(n * 10) / 10;

function gradeFor(avg) {
  if (avg >= 90) return 'A';
  if (avg >= 80) return 'B';
  if (avg >= 70) return 'C';
  if (avg >= 60) return 'D';
  return 'F';
}

function report(students) {
  const rows = students
    .map(({ name, scores }) => {
      const average = scores.length ? round1(scores.reduce((s, n) => s + n, 0) / scores.length) : 0;
      return { name, average, grade: gradeFor(average) };
    })
    .sort((a, b) => b.average - a.average || a.name.localeCompare(b.name));

  const distribution = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  for (const row of rows) distribution[row.grade]++;

  const classAverage = rows.length ? round1(rows.reduce((s, r) => s + r.average, 0) / rows.length) : 0;
  return { rows, classAverage, top: rows[0]?.name ?? null, distribution };
}
