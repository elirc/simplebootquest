function checkBookPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 11) problems.push('too short');
  if (!/\d/.test(pw)) problems.push('needs a digit');
  if (pw.length > 88) problems.push('too long');
  return problems;
}
