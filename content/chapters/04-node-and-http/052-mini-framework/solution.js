function matchPattern(pattern, path) {
  const p = pattern.split('/').filter(Boolean);
  const s = path.split('/').filter(Boolean);
  if (p.length !== s.length) return null;
  const params = {};
  for (let i = 0; i < p.length; i++) {
    if (p[i].startsWith(':')) params[p[i].slice(1)] = decodeURIComponent(s[i]);
    else if (p[i] !== s[i]) return null;
  }
  return params;
}

function createApp() {
  const layers = [];

  const route = (method) => (pattern, ...handlers) => {
    for (const handler of handlers) layers.push({ method, pattern, handler, exact: true });
  };

  return {
    use(prefixOrHandler, maybeHandler) {
      const [prefix, handler] = typeof prefixOrHandler === 'function' ? ['/', prefixOrHandler] : [prefixOrHandler, maybeHandler];
      layers.push({ method: null, pattern: prefix, handler, exact: false });
    },
    get: route('GET'),
    post: route('POST'),
    async handle(req, res) {
      const url = new URL(req.url, 'http://localhost');
      req.path = url.pathname;
      req.query = Object.fromEntries(url.searchParams);
      req.params = {};

      let error = null;
      for (const layer of layers) {
        if (res.sent) return;
        if (layer.method && layer.method !== req.method) continue;
        let params = {};
        if (layer.exact) {
          params = matchPattern(layer.pattern, req.path);
          if (!params) continue;
        } else if (!(req.path === layer.pattern || req.path.startsWith(layer.pattern.endsWith('/') ? layer.pattern : layer.pattern + '/'))) {
          continue;
        }
        const isErrorHandler = layer.handler.length === 4;
        if (Boolean(error) !== isErrorHandler) continue;

        req.params = params;
        let calledNext = false;
        let nextErr = null;
        const next = (err) => {
          calledNext = true;
          nextErr = err ?? null;
        };
        try {
          if (isErrorHandler) await layer.handler(error, req, res, next);
          else await layer.handler(req, res, next);
          if (!calledNext) return;
          error = nextErr ?? (isErrorHandler ? null : error);
          if (isErrorHandler && nextErr) error = nextErr;
        } catch (err) {
          error = err;
        }
      }
      if (res.sent) return;
      if (error) res.status(500).json({ error: 'Internal Server Error' });
      else res.status(404).json({ error: 'Not found' });
    },
  };
}
