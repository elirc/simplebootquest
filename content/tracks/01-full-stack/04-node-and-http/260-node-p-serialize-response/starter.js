function byteLength(str) {
  return str.length;
}

function serializeResponse({ status, headers = {}, body = '' }) {
  return `HTTP/1.1 ${status}\r\n\r\n${body}`;
}
