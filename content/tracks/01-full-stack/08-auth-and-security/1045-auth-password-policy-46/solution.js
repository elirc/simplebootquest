function checkRepoPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 14) problems.push('too short');
  if (!/\d/.test(pw)) problems.push('needs a digit');
  if (!/[A-Z]/.test(pw)) problems.push('needs an uppercase letter');
  if (!/[a-z]/.test(pw)) problems.push('needs a lowercase letter');
  if (pw.length > 112) problems.push('too long');
  return problems;
}
