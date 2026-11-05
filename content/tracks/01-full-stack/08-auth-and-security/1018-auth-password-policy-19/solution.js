function checkTicketPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 8) problems.push('too short');
  if (!/\d/.test(pw)) problems.push('needs a digit');
  if (pw !== pw.trim()) problems.push('has surrounding spaces');
  if (pw.length > 72) problems.push('too long');
  return problems;
}
