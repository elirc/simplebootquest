function checkHotelPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 11) problems.push('too short');
  if (!/\d/.test(pw)) problems.push('needs a digit');
  if (!/[^A-Za-z0-9\s]/.test(pw)) problems.push('needs a symbol');
  if (pw !== pw.trim()) problems.push('has surrounding spaces');
  if (pw.length > 88) problems.push('too long');
  return problems;
}
