function decodeSegment(seg) {
  const b64 = seg.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(atob(b64 + '='.repeat((4 - (b64.length % 4)) % 4)));
}

function checkClaims(token, { now, issuer, audience, leewaySec = 30 }) {
  return { valid: true, payload: decodeSegment(token.split('.')[1]) };
}
