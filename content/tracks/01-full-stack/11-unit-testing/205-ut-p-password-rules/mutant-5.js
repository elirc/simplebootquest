// mutant: rules reported in the wrong order
function passwordProblems(password) {
  const problems = [];
  if (!/[0-9]/.test(password)) problems.push('needs a number');
  if (password.length < 12) problems.push('too short');
  if (!/[A-Z]/.test(password)) problems.push('needs an uppercase letter');
  if (password.toLowerCase().includes('password')) problems.push('contains "password"');
  return problems;
}
