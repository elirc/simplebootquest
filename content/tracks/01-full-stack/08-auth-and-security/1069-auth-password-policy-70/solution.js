function checkSongPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 14) problems.push('too short');
  if (!/[a-z]/.test(pw)) problems.push('needs a lowercase letter');
  if (pw !== pw.trim()) problems.push('has surrounding spaces');
  return problems;
}
