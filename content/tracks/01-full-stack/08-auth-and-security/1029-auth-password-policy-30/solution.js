function checkRepoPassword(pw, name = '') {
  const problems = [];
  if (pw.length < 13) problems.push('too short');
  if (name && pw.toLowerCase().includes(name.toLowerCase())) problems.push('contains your name');
  if (pw !== pw.trim()) problems.push('has surrounding spaces');
  return problems;
}
