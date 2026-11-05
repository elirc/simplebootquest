function splitMessage(text, limit) {
  if (text.length <= limit) return [text];
  const room = limit - '(1/1) '.length;
  const words = text.split(' ');
  const parts = [];
  let current = '';
  for (const word of words) {
    if (!current) current = word;
    else if (current.length + 1 + word.length <= room) current += ' ' + word;
    else {
      parts.push(current);
      current = word;
    }
  }
  if (current) parts.push(current);
  return parts.map((p, i) => `(${i + 1}/${parts.length}) ${p}`);
}
