function maskEmail(email) {
  const at = email.indexOf('@');
  if (at === -1) return email;
  const local = email.slice(0, at);
  return local[0] + '*'.repeat(Math.max(1, local.length - 1)) + email.slice(at);
}
