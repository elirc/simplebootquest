function safeRedirect(next, fallback = '/') {
  return next || fallback;
}
