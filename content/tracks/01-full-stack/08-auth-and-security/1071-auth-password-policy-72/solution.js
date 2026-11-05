function checkWorkoutPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 12) problems.push('too short');
  if (!/\d/.test(pw)) problems.push('needs a digit');
  if (name && pw.toLowerCase().includes(name.toLowerCase())) problems.push('contains your name');
  if (pw !== pw.trim()) problems.push('has surrounding spaces');
  if (pw.length > 96) problems.push('too long');
  return problems;
}
