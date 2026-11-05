function checkCoursePassword(pw, name = '') {
  const problems = [];
  if (pw.length < 12) problems.push('too short');
  if (!/\d/.test(pw)) problems.push('needs a digit');
  if (!/[^A-Za-z0-9\s]/.test(pw)) problems.push('needs a symbol');
  return problems;
}
