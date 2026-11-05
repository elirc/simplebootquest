function checkHotelPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 13) problems.push('too short');
  if (!/[a-z]/.test(pw)) problems.push('needs a lowercase letter');
  if (!/[^A-Za-z0-9\s]/.test(pw)) problems.push('needs a symbol');
  if (name && pw.toLowerCase().includes(name.toLowerCase())) problems.push('contains your name');
  if (pw.length > 104) problems.push('too long');
  return problems;
}
