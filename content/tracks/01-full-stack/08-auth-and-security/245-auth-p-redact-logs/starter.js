function redact(value, keys = ['password', 'token', 'authorization', 'cookie', 'secret']) {
  return JSON.parse(JSON.stringify(value));
}
