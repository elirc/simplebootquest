function normalizeEmail(input) {
  if (typeof input !== 'string') return null;
  const email = input.trim().toLowerCase();
  if (email.length > 254 || /\s/.test(email)) return null;
  const parts = email.split('@');
  if (parts.length !== 2) return null;
  const [local, domain] = parts;
  if (!local || local.length > 64) return null;
  const labels = domain.split('.');
  if (labels.length < 2 || labels.some((l) => l === '')) return null;
  return email;
}

function sameAccount(a, b) {
  const x = normalizeEmail(a);
  return x !== null && x === normalizeEmail(b);
}
