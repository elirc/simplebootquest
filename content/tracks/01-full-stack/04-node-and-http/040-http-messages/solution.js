const STATUS_TEXT = {
  200: 'OK',
  201: 'Created',
  204: 'No Content',
  400: 'Bad Request',
  404: 'Not Found',
  500: 'Internal Server Error',
};

function parseRequest(raw) {
  const separator = raw.indexOf('\r\n\r\n');
  const head = separator === -1 ? raw : raw.slice(0, separator);
  const body = separator === -1 ? '' : raw.slice(separator + 4);
  const [requestLine, ...headerLines] = head.split('\r\n');
  const [method, path, version] = requestLine.split(' ');
  const headers = {};
  for (const line of headerLines) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    headers[line.slice(0, colon).trim().toLowerCase()] = line.slice(colon + 1).trim();
  }
  return { method, path, version, headers, body };
}

function formatResponse(status, headers, body) {
  const lines = [`HTTP/1.1 ${status} ${STATUS_TEXT[status] ?? 'Unknown'}`];
  for (const [name, value] of Object.entries(headers)) lines.push(`${name}: ${value}`);
  lines.push(`Content-Length: ${new TextEncoder().encode(body).length}`);
  return `${lines.join('\r\n')}\r\n\r\n${body}`;
}
