function checkSongPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 12) problems.push('too short');
  if (!/\d/.test(pw)) problems.push('needs a digit');
  if (!/[A-Z]/.test(pw)) problems.push('needs an uppercase letter');
  if (pw.length > 96) problems.push('too long');
  return problems;
}
