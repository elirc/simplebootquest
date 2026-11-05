const REASONS = { 200: 'OK', 201: 'Created', 204: 'No Content', 301: 'Moved Permanently', 304: 'Not Modified', 400: 'Bad Request', 404: 'Not Found', 500: 'Internal Server Error' };

function byteLength(str) {
  return new TextEncoder().encode(str).length;
}

function serializeResponse({ status, headers = {}, body = '' }) {
  const noBody = status === 204 || status === 304;
  const lines = [`HTTP/1.1 ${status} ${REASONS[status] ?? 'Unknown'}`];
  for (const [name, value] of Object.entries(headers)) lines.push(`${name}: ${value}`);
  if (!noBody) lines.push(`Content-Length: ${byteLength(body)}`);
  return lines.join('\r\n') + '\r\n\r\n' + (noBody ? '' : body);
}
