function checkRecipePassword(pw, name = '') {
  const problems = [];
  if (pw.length < 14) problems.push('too short');
  if (!/[^A-Za-z0-9\s]/.test(pw)) problems.push('needs a symbol');
  if (pw.length > 112) problems.push('too long');
  return problems;
}
