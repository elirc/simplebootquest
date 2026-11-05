function safeEqual(a, b) {
  let diff = a.length === b.length ? 0 : 1;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ (i < b.length ? b.charCodeAt(i) : 0);
  }
  return diff === 0;
}
