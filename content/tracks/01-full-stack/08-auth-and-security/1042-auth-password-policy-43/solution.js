function checkHotelPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 9) problems.push('too short');
  if (!/\d/.test(pw)) problems.push('needs a digit');
  if (pw.length > 72) problems.push('too long');
  return problems;
}
