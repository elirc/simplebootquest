function resourceRoutes(name, { parent } = {}) {
  const base = parent ? `/${parent}/:${parent.replace(/s$/, '')}Id/${name}` : `/${name}`;
  return [
    { method: 'GET', path: base, action: 'list' },
    { method: 'GET', path: `${base}/:id`, action: 'show' },
    { method: 'POST', path: base, action: 'create' },
    { method: 'PATCH', path: `${base}/:id`, action: 'update' },
    { method: 'DELETE', path: `${base}/:id`, action: 'destroy' },
  ];
}

function describeRoute(method, path) {
  const segments = path.split('/').filter(Boolean);
  if (segments.length === 0) return null;
  const isCollection = segments.length % 2 === 1;
  const table = isCollection ? { GET: 'list', POST: 'create' } : { GET: 'show', PATCH: 'update', PUT: 'update', DELETE: 'destroy' };
  return table[method] ?? null;
}
