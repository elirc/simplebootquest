function checkTaskPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 12) problems.push('too short');
  if (!/[A-Z]/.test(pw)) problems.push('needs an uppercase letter');
  if (!/[a-z]/.test(pw)) problems.push('needs a lowercase letter');
  if (!/[^A-Za-z0-9\s]/.test(pw)) problems.push('needs a symbol');
  return problems;
}
