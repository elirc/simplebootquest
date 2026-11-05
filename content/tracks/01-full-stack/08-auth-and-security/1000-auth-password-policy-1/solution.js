function checkFlightPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 13) problems.push('too short');
  if (!/\d/.test(pw)) problems.push('needs a digit');
  if (pw !== pw.trim()) problems.push('has surrounding spaces');
  if (pw.length > 104) problems.push('too long');
  return problems;
}
