function checkOrderPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 12) problems.push('too short');
  if (!/\d/.test(pw)) problems.push('needs a digit');
  if (!/[A-Z]/.test(pw)) problems.push('needs an uppercase letter');
  if (!/[a-z]/.test(pw)) problems.push('needs a lowercase letter');
  if (pw !== pw.trim()) problems.push('has surrounding spaces');
  return problems;
}
