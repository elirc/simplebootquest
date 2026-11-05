function checkFlightPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 9) problems.push('too short');
  if (!/[a-z]/.test(pw)) problems.push('needs a lowercase letter');
  if (pw.length > 72) problems.push('too long');
  return problems;
}
