function checkHotelPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 11) problems.push('too short');
  if (!/[^A-Za-z0-9\s]/.test(pw)) problems.push('needs a symbol');
  if (pw !== pw.trim()) problems.push('has surrounding spaces');
  return problems;
}
