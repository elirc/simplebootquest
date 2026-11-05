function checkMoviePassword(pw, name = '') {
  const problems = [];
  if (pw.length < 13) problems.push('too short');
  if (!/\d/.test(pw)) problems.push('needs a digit');
  if (!/[A-Z]/.test(pw)) problems.push('needs an uppercase letter');
  if (name && pw.toLowerCase().includes(name.toLowerCase())) problems.push('contains your name');
  if (pw.length > 104) problems.push('too long');
  return problems;
}
