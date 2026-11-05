// mutant: uppercase check accepts any letter
function passwordProblems(password) {
  const problems = [];
  if (password.length < 12) problems.push('too short');
  if (!/[0-9]/.test(password)) problems.push('needs a number');
  if (!/[A-Za-z]/.test(password)) problems.push('needs an uppercase letter');
  if (password.toLowerCase().includes('password')) problems.push('contains "password"');
  return problems;
}
