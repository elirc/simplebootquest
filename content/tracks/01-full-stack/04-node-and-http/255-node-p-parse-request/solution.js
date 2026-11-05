function parseRequest(raw) {
  const split = raw.indexOf('\r\n\r\n');
  const head = split === -1 ? raw : raw.slice(0, split);
  const body = split === -1 ? '' : raw.slice(split + 4);
  const [requestLine, ...headerLines] = head.split('\r\n');
  const m = /^([A-Z]+) (\S+) (HTTP\/\d\.\d)$/.exec(requestLine);
  if (!m) throw new Error('Bad request line');
  const [, method, target, version] = m;
  const q = target.indexOf('?');
  const path = q === -1 ? target : target.slice(0, q);
  const query = {};
  if (q !== -1) {
    for (const pair of target.slice(q + 1).split('&')) {
      if (!pair) continue;
      const [k, v = ''] = pair.split('=');
      query[decodeURIComponent(k)] = decodeURIComponent(v.replace(/\+/g, ' '));
    }
  }
  const headers = {};
  for (const line of headerLines) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    const name = line.slice(0, colon).trim().toLowerCase();
    const value = line.slice(colon + 1).trim();
    headers[name] = name in headers ? `${headers[name]}, ${value}` : value;
  }
  return { method, path, query, version, headers, body };
}
