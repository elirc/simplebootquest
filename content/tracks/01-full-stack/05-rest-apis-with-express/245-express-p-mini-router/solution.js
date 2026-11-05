function createRouter() {
  const routes = [];
  const router = {};
  for (const method of ['get', 'post', 'patch', 'delete']) {
    router[method] = (path, ...handlers) => {
      routes.push({ method: method.toUpperCase(), parts: path.split('/').filter(Boolean), handlers });
      return router;
    };
  }
  router.handle = async (req, res) => {
    const segs = req.path.split('/').filter(Boolean);
    for (const route of routes) {
      if (route.method !== req.method || route.parts.length !== segs.length) continue;
      const params = {};
      const ok = route.parts.every((p, i) => {
        if (p.startsWith(':')) {
          params[p.slice(1)] = decodeURIComponent(segs[i]);
          return true;
        }
        return p === segs[i];
      });
      if (!ok) continue;
      req.params = params;
      for (const handler of route.handlers) {
        let proceed = false;
        let error;
        await handler(req, res, (err) => {
          if (err) error = err;
          else proceed = true;
        });
        if (error) throw error;
        if (!proceed) break;
      }
      return true;
    }
    return false;
  };
  return router;
}
