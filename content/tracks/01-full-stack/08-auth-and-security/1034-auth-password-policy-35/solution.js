function checkBookPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 11) problems.push('too short');
  if (!/\d/.test(pw)) problems.push('needs a digit');
  if (!/[A-Z]/.test(pw)) problems.push('needs an uppercase letter');
  if (name && pw.toLowerCase().includes(name.toLowerCase())) problems.push('contains your name');
  if (pw.length > 88) problems.push('too long');
  return problems;
}
