function fnv1a(str) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

function bucket(flag, userId) {
  return fnv1a(`${flag}:${userId}`) % 100;
}

function isEnabled(flag, userId, percent) {
  if (percent <= 0) return false;
  if (percent >= 100) return true;
  return bucket(flag, userId) < percent;
}
