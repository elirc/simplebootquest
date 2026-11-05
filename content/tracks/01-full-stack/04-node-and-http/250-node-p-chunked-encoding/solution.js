function encodeChunked(chunks) {
  let out = '';
  for (const chunk of chunks) {
    if (!chunk) continue;
    out += `${chunk.length.toString(16)}\r\n${chunk}\r\n`;
  }
  return out + '0\r\n\r\n';
}

function decodeChunked(body) {
  let pos = 0;
  let out = '';
  for (;;) {
    const lineEnd = body.indexOf('\r\n', pos);
    if (lineEnd === -1) throw new Error('Malformed chunk');
    const sizeText = body.slice(pos, lineEnd);
    if (!/^[0-9a-fA-F]+$/.test(sizeText)) throw new Error('Malformed chunk');
    const size = parseInt(sizeText, 16);
    if (size === 0) return out;
    const start = lineEnd + 2;
    const data = body.slice(start, start + size);
    if (data.length !== size || body.slice(start + size, start + size + 2) !== '\r\n') throw new Error('Malformed chunk');
    out += data;
    pos = start + size + 2;
  }
}
