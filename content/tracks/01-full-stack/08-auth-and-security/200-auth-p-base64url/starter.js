function encode(text) {
  return btoa(text);
}

function decode(b64url) {
  return atob(b64url);
}
