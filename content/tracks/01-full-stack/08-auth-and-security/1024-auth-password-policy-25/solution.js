function checkCarPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 10) problems.push('too short');
  if (!/[^A-Za-z0-9\s]/.test(pw)) problems.push('needs a symbol');
  if (name && pw.toLowerCase().includes(name.toLowerCase())) problems.push('contains your name');
  if (pw !== pw.trim()) problems.push('has surrounding spaces');
  if (pw.length > 80) problems.push('too long');
  return problems;
}
