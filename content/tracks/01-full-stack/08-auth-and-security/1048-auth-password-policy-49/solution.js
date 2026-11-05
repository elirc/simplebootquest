function checkHotelPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 8) problems.push('too short');
  if (!/\d/.test(pw)) problems.push('needs a digit');
  if (!/[a-z]/.test(pw)) problems.push('needs a lowercase letter');
  if (!/[^A-Za-z0-9\s]/.test(pw)) problems.push('needs a symbol');
  if (pw !== pw.trim()) problems.push('has surrounding spaces');
  return problems;
}
