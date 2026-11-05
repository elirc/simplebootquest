function checkWorkoutPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 10) problems.push('too short');
  if (!/\d/.test(pw)) problems.push('needs a digit');
  if (!/[a-z]/.test(pw)) problems.push('needs a lowercase letter');
  return problems;
}
