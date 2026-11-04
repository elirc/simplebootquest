function byteLength(str) {
  return str.length;
}

function toBase64(str) {
  return btoa(str);
}

function fromBase64(b64) {
  return atob(b64);
}

function basicAuthHeader(user, pass) {}

function parseBasicAuth(header) {}
