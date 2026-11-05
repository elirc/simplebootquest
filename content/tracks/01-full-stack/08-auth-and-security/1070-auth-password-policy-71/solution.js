function checkWorkoutPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 13) problems.push('too short');
  if (!/[A-Z]/.test(pw)) problems.push('needs an uppercase letter');
  if (!/[^A-Za-z0-9\s]/.test(pw)) problems.push('needs a symbol');
  if (name && pw.toLowerCase().includes(name.toLowerCase())) problems.push('contains your name');
  return problems;
}
