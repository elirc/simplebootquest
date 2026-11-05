function checkTicketPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 14) problems.push('too short');
  if (name && pw.toLowerCase().includes(name.toLowerCase())) problems.push('contains your name');
  if (pw !== pw.trim()) problems.push('has surrounding spaces');
  if (pw.length > 112) problems.push('too long');
  return problems;
}
