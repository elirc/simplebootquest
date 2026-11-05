function redactUrl(url, keys = ['token', 'password', 'secret', 'apiKey']) {
  return url;
}

function logLine({ method, url, status, ms, userId }) {
  return `${method} ${url} ${status} ${ms}ms`;
}
