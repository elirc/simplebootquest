function checkHotelPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 8) problems.push('too short');
  if (!/\d/.test(pw)) problems.push('needs a digit');
  if (!/[a-z]/.test(pw)) problems.push('needs a lowercase letter');
  if (pw.length > 72) problems.push('too long');
  return problems;
}
