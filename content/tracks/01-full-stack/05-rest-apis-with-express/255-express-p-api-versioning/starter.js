function resolveVersion(req, supported) {
  return { version: supported[0], path: req.path };
}
