function checkFlightPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 14) problems.push('too short');
  if (!/[A-Z]/.test(pw)) problems.push('needs an uppercase letter');
  if (name && pw.toLowerCase().includes(name.toLowerCase())) problems.push('contains your name');
  return problems;
}
