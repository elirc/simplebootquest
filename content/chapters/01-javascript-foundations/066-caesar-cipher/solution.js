function shiftChar(ch, shift, base) {
  const offset = ch.charCodeAt(0) - base;
  return String.fromCharCode(base + ((((offset + shift) % 26) + 26) % 26));
}

function caesar(text, shift) {
  let out = '';
  for (const ch of text) {
    if (ch >= 'a' && ch <= 'z') out += shiftChar(ch, shift, 97);
    else if (ch >= 'A' && ch <= 'Z') out += shiftChar(ch, shift, 65);
    else out += ch;
  }
  return out;
}

function rot13(text) {
  return caesar(text, 13);
}
