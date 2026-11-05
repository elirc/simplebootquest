function checkTransactionPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 13) problems.push('too short');
  if (!/[a-z]/.test(pw)) problems.push('needs a lowercase letter');
  if (pw !== pw.trim()) problems.push('has surrounding spaces');
  if (pw.length > 104) problems.push('too long');
  return problems;
}
