function testRequest(handler) {
  return (method, path, { body, headers = {} } = {}) =>
    new Promise((resolve, reject) => {
      const [pathname, qs = ''] = path.split('?');
      const req = {
        method,
        path: pathname,
        query: Object.fromEntries(new URLSearchParams(qs)),
        headers: Object.fromEntries(Object.entries(headers).map(([k, v]) => [k.toLowerCase(), v])),
        body,
      };
      let ended = false;
      const out = { status: 200, headers: {}, body: undefined };
      const finish = () => {
        ended = true;
        resolve(out);
      };
      const res = {
        status(code) { out.status = code; return res; },
        set(name, value) { out.headers[name.toLowerCase()] = value; return res; },
        json(obj) { out.headers['content-type'] = 'application/json'; out.body = obj; finish(); return res; },
        send(text) { out.body = text; finish(); return res; },
        end() { finish(); return res; },
      };
      Promise.resolve()
        .then(() => handler(req, res))
        .then(
          () => {
            if (!ended) reject(new Error('Handler did not send a response'));
          },
          (err) => {
            if (!ended) resolve({ status: 500, headers: {}, body: { error: err instanceof Error ? err.message : String(err) } });
          },
        );
    });
}
