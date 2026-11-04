function corsHeaders(req, config) {
  const origin = req.headers.origin;
  const isPreflight = req.method === 'OPTIONS' && Boolean(req.headers['access-control-request-method']);

  if (!origin || !config.origins.includes(origin)) {
    return { status: isPreflight && origin ? 403 : 200, headers: {} };
  }

  const headers = { 'Access-Control-Allow-Origin': origin, Vary: 'Origin' };
  if (config.credentials) headers['Access-Control-Allow-Credentials'] = 'true';

  if (!isPreflight) return { status: 200, headers };

  const requested = req.headers['access-control-request-method'].toUpperCase();
  if (!config.methods.includes(requested)) return { status: 403, headers: {} };

  headers['Access-Control-Allow-Methods'] = config.methods.join(', ');
  headers['Access-Control-Allow-Headers'] = config.headers.join(', ');
  headers['Access-Control-Max-Age'] = String(config.maxAge);
  return { status: 204, headers };
}
