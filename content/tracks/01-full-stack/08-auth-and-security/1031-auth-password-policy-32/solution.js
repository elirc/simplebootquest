function checkTaskPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 8) problems.push('too short');
  if (!/\d/.test(pw)) problems.push('needs a digit');
  if (!/[a-z]/.test(pw)) problems.push('needs a lowercase letter');
  if (name && pw.toLowerCase().includes(name.toLowerCase())) problems.push('contains your name');
  return problems;
}
