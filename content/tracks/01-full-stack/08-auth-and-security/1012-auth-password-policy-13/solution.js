function checkEmployeePassword(pw, name = '') {
  const problems = [];
  if (pw.length < 9) problems.push('too short');
  if (!/[a-z]/.test(pw)) problems.push('needs a lowercase letter');
  if (!/[^A-Za-z0-9\s]/.test(pw)) problems.push('needs a symbol');
  return problems;
}
