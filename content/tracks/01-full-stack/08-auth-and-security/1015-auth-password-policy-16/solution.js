function checkRepoPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 12) problems.push('too short');
  if (!/[^A-Za-z0-9\s]/.test(pw)) problems.push('needs a symbol');
  if (name && pw.toLowerCase().includes(name.toLowerCase())) problems.push('contains your name');
  return problems;
}
