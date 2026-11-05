function isValidIsbn10(text) {
  const s = text.replace(/[-\s]/g, '');
  if (!/^\d{9}[\dX]$/.test(s)) return false;
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    const value = s[i] === 'X' ? 10 : Number(s[i]);
    sum += value * (10 - i);
  }
  return sum % 11 === 0;
}
