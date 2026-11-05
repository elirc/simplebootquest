function checkStudentPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 10) problems.push('too short');
  if (!/[a-z]/.test(pw)) problems.push('needs a lowercase letter');
  if (!/[^A-Za-z0-9\s]/.test(pw)) problems.push('needs a symbol');
  if (pw !== pw.trim()) problems.push('has surrounding spaces');
  if (pw.length > 80) problems.push('too long');
  return problems;
}
