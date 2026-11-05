function matches(pattern, path) {
  const p = pattern.split('/').filter(Boolean);
  const s = path.split('/').filter(Boolean);
  return p.length === s.length && p.every((seg, i) => seg.startsWith(':') || seg === s[i]);
}

function methodGuard(routes) {
  return (req, res, next) => {
    const pattern = Object.keys(routes).find((p) => matches(p, req.path));
    if (!pattern) return next();
    const methods = routes[pattern];
    const allowed = methods.includes('GET') ? [...methods, 'HEAD'] : [...methods];
    if (req.method === 'OPTIONS' || allowed.includes(req.method)) return next();
    res.set('Allow', allowed.join(', '));
    res.status(405).json({ error: 'Method Not Allowed' });
  };
}
