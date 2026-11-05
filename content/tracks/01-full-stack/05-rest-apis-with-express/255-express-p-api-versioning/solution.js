function resolveVersion(req, supported) {
  let version;
  let path = req.path;
  const m = /^\/v(\d+)(\/.*)?$/.exec(req.path);
  if (m) {
    version = Number(m[1]);
    path = m[2] || '/';
  } else if (req.headers['accept-version'] !== undefined) {
    version = Number(req.headers['accept-version']);
  } else {
    const media = /vnd\.[^.]+\.v(\d+)\+json/.exec(req.headers.accept ?? '');
    version = media ? Number(media[1]) : Math.min(...supported);
  }
  if (!supported.includes(version)) return null;
  return { version, path };
}
