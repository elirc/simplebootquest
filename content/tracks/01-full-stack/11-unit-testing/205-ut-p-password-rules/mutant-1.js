// mutant: length off by one
function passwordProblems(password) {
  const problems = [];
  if (password.length < 11) problems.push('too short');
  if (!/[0-9]/.test(password)) problems.push('needs a number');
  if (!/[A-Z]/.test(password)) problems.push('needs an uppercase letter');
  if (password.toLowerCase().includes('password')) problems.push('contains "password"');
  return problems;
}
