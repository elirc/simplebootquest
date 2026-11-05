function checkBookPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 11) problems.push('too short');
  if (!/[A-Z]/.test(pw)) problems.push('needs an uppercase letter');
  if (!/[^A-Za-z0-9\s]/.test(pw)) problems.push('needs a symbol');
  if (name && pw.toLowerCase().includes(name.toLowerCase())) problems.push('contains your name');
  if (pw.length > 88) problems.push('too long');
  return problems;
}
