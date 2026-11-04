function splitPath(p) {
  return p.split('/').filter((segment) => segment !== '');
}

function matchPath(pattern, path) {
  const patternParts = splitPath(pattern);
  const pathParts = splitPath(path);
  if (patternParts.length !== pathParts.length) return null;
  const params = {};
  for (let i = 0; i < patternParts.length; i++) {
    const expected = patternParts[i];
    const actual = pathParts[i];
    if (expected.startsWith(':')) params[expected.slice(1)] = decodeURIComponent(actual);
    else if (expected !== actual) return null;
  }
  return params;
}

function createRouter() {
  const routes = [];
  return {
    add(method, pattern, handler) {
      routes.push({ method, pattern, handler });
    },
    handle(method, path) {
      for (const route of routes) {
        if (route.method !== method) continue;
        const params = matchPath(route.pattern, path);
        if (params) return route.handler(params);
      }
      return { status: 404 };
    },
  };
}
