function toBinary(n) {
  if (n === 0) return '0';
  let bits = '';
  while (n > 0) {
    bits = (n % 2) + bits;
    n = Math.floor(n / 2);
  }
  return bits;
}

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function rgbToHex({ r, g, b }) {
  return '#' + [r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('');
}
