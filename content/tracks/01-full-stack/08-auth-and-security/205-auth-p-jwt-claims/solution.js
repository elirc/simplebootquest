function decodeSegment(seg) {
  const b64 = seg.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(atob(b64 + '='.repeat((4 - (b64.length % 4)) % 4)));
}

function checkClaims(token, { now, issuer, audience, leewaySec = 30 }) {
  const parts = typeof token === 'string' ? token.split('.') : [];
  if (parts.length !== 3) return { valid: false, reason: 'malformed' };
  let header;
  let payload;
  try {
    header = decodeSegment(parts[0]);
    payload = decodeSegment(parts[1]);
  } catch {
    return { valid: false, reason: 'malformed' };
  }
  if (String(header.alg).toLowerCase() === 'none') return { valid: false, reason: 'alg none not allowed' };
  const nowSec = now / 1000;
  if (typeof payload.exp !== 'number' || nowSec > payload.exp + leewaySec) return { valid: false, reason: 'expired' };
  if (typeof payload.nbf === 'number' && nowSec < payload.nbf - leewaySec) return { valid: false, reason: 'not yet valid' };
  if (payload.iss !== issuer) return { valid: false, reason: 'wrong issuer' };
  const aud = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
  if (!aud.includes(audience)) return { valid: false, reason: 'wrong audience' };
  return { valid: true, payload };
}
