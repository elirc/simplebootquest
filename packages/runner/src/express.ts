/**
 * An Express-compatible app and a Supertest-compatible `request(app)` for the
 * in-browser runner. No sockets: requests are dispatched in memory. The
 * routing, middleware and error-handling rules follow Express 5 (async
 * handlers that reject are forwarded to error middleware), so code written
 * against it works in a real Express app — and tests written with `request`
 * work with the real Supertest.
 */

type Next = (err?: unknown) => void;
type Handler = (req: Req, res: Res, next: Next) => unknown;
type ErrorHandler = (err: unknown, req: Req, res: Res, next: Next) => unknown;
type AnyHandler = Handler | ErrorHandler | App | Router;

interface Layer {
  method: string | null; // null = app.use (any method, prefix match)
  path: string;
  handlers: AnyHandler[];
}

export interface Req {
  method: string;
  url: string;
  originalUrl: string;
  baseUrl: string;
  path: string;
  query: Record<string, string | string[]>;
  params: Record<string, string>;
  headers: Record<string, string>;
  body: unknown;
  rawBody?: string;
  app: App;
  get(name: string): string | undefined;
  header(name: string): string | undefined;
  [key: string]: unknown;
}

export interface Res {
  statusCode: number;
  headersSent: boolean;
  locals: Record<string, unknown>;
  status(code: number): Res;
  set(name: string | Record<string, string>, value?: string): Res;
  header(name: string, value: string): Res;
  get(name: string): string | undefined;
  type(type: string): Res;
  json(body: unknown): Res;
  send(body?: unknown): Res;
  sendStatus(code: number): Res;
  end(body?: string): Res;
  location(url: string): Res;
  redirect(statusOrUrl: number | string, url?: string): Res;
  cookie(name: string, value: string, options?: Record<string, unknown>): Res;
  clearCookie(name: string, options?: Record<string, unknown>): Res;
}

const STATUS_TEXT: Record<number, string> = {
  200: 'OK', 201: 'Created', 204: 'No Content', 301: 'Moved Permanently', 302: 'Found', 304: 'Not Modified',
  400: 'Bad Request', 401: 'Unauthorized', 403: 'Forbidden', 404: 'Not Found', 405: 'Method Not Allowed', 409: 'Conflict',
  413: 'Payload Too Large', 415: 'Unsupported Media Type', 422: 'Unprocessable Entity', 429: 'Too Many Requests',
  500: 'Internal Server Error', 503: 'Service Unavailable',
};

function splitPath(p: string): string[] {
  return p.split('/').filter(Boolean);
}

/** Match a route pattern against a path. `prefix` allows extra trailing segments (for app.use). */
function matchPath(pattern: string, path: string, prefix: boolean): { params: Record<string, string>; consumed: string } | null {
  const pat = splitPath(pattern);
  const segs = splitPath(path);
  const params: Record<string, string> = {};
  let i = 0;
  for (; i < pat.length; i++) {
    const p = pat[i]!;
    if (p === '*' || p.startsWith('*')) {
      params[p.slice(1) || '0'] = segs.slice(i).map(decodeURIComponent).join('/');
      return { params, consumed: path };
    }
    const optional = p.startsWith(':') && p.endsWith('?');
    const s = segs[i];
    if (s === undefined) {
      if (optional) continue;
      return null;
    }
    if (p.startsWith(':')) params[p.slice(1, optional ? -1 : undefined)] = decodeURIComponent(s);
    else if (p !== s) return null;
  }
  if (!prefix && segs.length > pat.length) return null;
  return { params, consumed: '/' + segs.slice(0, Math.min(pat.length, segs.length)).join('/') };
}

function parseQuery(qs: string): Record<string, string | string[]> {
  const out: Record<string, string | string[]> = {};
  for (const [k, v] of new URLSearchParams(qs)) {
    const prev = out[k];
    out[k] = prev === undefined ? v : Array.isArray(prev) ? [...prev, v] : [prev, v];
  }
  return out;
}

export interface Router {
  (req: Req, res: Res, next: Next): void;
  __isRouter: true;
  stack: Layer[];
  use(...args: unknown[]): Router;
  get(path: string, ...h: Handler[]): Router;
  post(path: string, ...h: Handler[]): Router;
  put(path: string, ...h: Handler[]): Router;
  patch(path: string, ...h: Handler[]): Router;
  delete(path: string, ...h: Handler[]): Router;
  all(path: string, ...h: Handler[]): Router;
  route(path: string): Record<string, (...h: Handler[]) => unknown>;
}

export interface App extends Router {
  __isApp: true;
  settings: Record<string, unknown>;
  locals: Record<string, unknown>;
  set(name: string, value: unknown): App;
  get(name: string): unknown;
  get(path: string, ...h: Handler[]): App;
  listen(port?: number, cb?: () => void): { close(cb?: () => void): void; address(): { port: number } };
  handle(req: Req, res: Res, done: Next): void;
}

const METHODS = ['get', 'post', 'put', 'patch', 'delete', 'all'] as const;

function createRouter(): Router {
  const stack: Layer[] = [];
  const router = function (req: Req, res: Res, next: Next) {
    dispatch(stack, req, res, next);
  } as Router;
  router.__isRouter = true;
  router.stack = stack;
  router.use = (...args: unknown[]) => {
    const path = typeof args[0] === 'string' ? (args.shift() as string) : '/';
    const handlers = args.flat() as AnyHandler[];
    if (handlers.length === 0) throw new TypeError('app.use() requires a middleware function');
    for (const h of handlers) if (typeof h !== 'function') throw new TypeError('app.use() requires a middleware function but got a ' + typeof h);
    stack.push({ method: null, path, handlers });
    return router;
  };
  for (const m of METHODS) {
    (router as unknown as Record<string, unknown>)[m] = (path: string, ...handlers: Handler[]) => {
      if (typeof path !== 'string') throw new TypeError(`app.${m}() needs a path as its first argument`);
      if (handlers.length === 0) throw new TypeError(`Route.${m}() requires a callback function`);
      stack.push({ method: m === 'all' ? 'ALL' : m.toUpperCase(), path, handlers: handlers.flat() });
      return router;
    };
  }
  router.route = (path: string) => {
    const chain: Record<string, (...h: Handler[]) => unknown> = {};
    for (const m of METHODS) {
      chain[m] = (...h: Handler[]) => {
        (router as unknown as Record<string, (p: string, ...h: Handler[]) => unknown>)[m]!(path, ...h);
        return chain;
      };
    }
    return chain;
  };
  return router;
}

function dispatch(stack: Layer[], req: Req, res: Res, done: Next) {
  let index = 0;
  const parentBase = req.baseUrl;
  const parentPath = req.path;

  const next: Next = (err) => {
    if (res.headersSent && err === undefined) return;
    req.baseUrl = parentBase;
    req.path = parentPath;
    if (err === 'route') err = undefined;
    if (err === 'router') return done();
    while (index < stack.length) {
      const layer = stack[index++]!;
      if (layer.method && layer.method !== 'ALL' && layer.method !== req.method && !(layer.method === 'GET' && req.method === 'HEAD')) continue;
      const m = matchPath(layer.path, req.path, layer.method === null);
      if (!m) continue;
      if (layer.method) req.params = { ...req.params, ...m.params };
      return runHandlers(layer, m, err);
    }
    done(err);
  };

  const runHandlers = (layer: Layer, m: { params: Record<string, string>; consumed: string }, err: unknown) => {
    let i = 0;
    const step: Next = (e) => {
      if (e === 'route') return next();
      if (e !== undefined) err = e;
      const handler = layer.handlers[i++];
      if (!handler) return next(err);
      const isErrorHandler = typeof handler === 'function' && handler.length === 4 && !('__isRouter' in handler);
      if ((err !== undefined) !== isErrorHandler) return step();
      if (layer.method === null && m.consumed !== '/') {
        req.baseUrl = parentBase + m.consumed;
        req.path = req.path.slice(m.consumed.length) || '/';
      }
      try {
        const out = isErrorHandler
          ? (handler as ErrorHandler)(err, req, res, (e2) => { err = undefined; step(e2); })
          : (handler as Handler)(req, res, (e2) => { req.baseUrl = parentBase; req.path = parentPath; step(e2); });
        if (out && typeof (out as Promise<unknown>).then === 'function') {
          (out as Promise<unknown>).then(undefined, (e2: unknown) => {
            err = undefined;
            step(e2 ?? new Error('Rejected promise'));
          });
        }
      } catch (e2) {
        err = undefined;
        req.baseUrl = parentBase;
        req.path = parentPath;
        step(e2);
      }
    };
    step(err === undefined ? undefined : err);
  };

  next();
}

/** `express()` — create an app. */
export function express(): App {
  const router = createRouter();
  const app = router as unknown as App;
  app.__isApp = true;
  app.settings = {};
  app.locals = {};
  const routeGet = (router as unknown as { get: (...a: unknown[]) => unknown }).get;
  (app as unknown as { get: (...a: unknown[]) => unknown }).get = (...args: unknown[]) => {
    if (args.length === 1 && typeof args[0] === 'string') return app.settings[args[0]];
    return routeGet(...args);
  };
  app.set = (name, value) => {
    app.settings[name] = value;
    return app;
  };
  app.listen = (port = 3000, cb) => {
    cb?.();
    return { close: (done) => done?.(), address: () => ({ port }) };
  };
  app.handle = (req, res, done) => dispatch(router.stack, req, res, done);
  return app;
}

/** `express.json()` — parse JSON bodies (only when Content-Type is JSON, like the real one). */
function json(options: { limit?: number } = {}): Handler {
  const limit = options.limit ?? 100_000;
  return (req, _res, next) => {
    const type = req.headers['content-type'] ?? '';
    if (req.rawBody === undefined || !/json/i.test(type)) return next();
    if (req.rawBody.length > limit) return next(Object.assign(new Error('request entity too large'), { status: 413, statusCode: 413, type: 'entity.too.large' }));
    if (req.rawBody === '') {
      req.body = {};
      return next();
    }
    try {
      req.body = JSON.parse(req.rawBody);
      next();
    } catch (e) {
      next(Object.assign(new Error(`Unexpected token in JSON: ${(e as Error).message}`), { status: 400, statusCode: 400, type: 'entity.parse.failed' }));
    }
  };
}

function urlencoded(): Handler {
  return (req, _res, next) => {
    if (req.rawBody !== undefined && /x-www-form-urlencoded/i.test(req.headers['content-type'] ?? '')) req.body = parseQuery(req.rawBody);
    next();
  };
}

express.json = json;
express.urlencoded = urlencoded;
express.Router = createRouter;
express.static = () => ((_req: Req, _res: Res, next: Next) => next()) as Handler;

export interface TestResponse {
  status: number;
  statusCode: number;
  headers: Record<string, string>;
  header: Record<string, string>;
  body: unknown;
  text: string;
  type: string;
  ok: boolean;
}

function handleRequest(app: App | Handler, method: string, url: string, headers: Record<string, string>, rawBody: string | undefined): Promise<TestResponse> {
  return new Promise((resolve, reject) => {
    const [path, qs = ''] = url.split('?');
    const outHeaders: Record<string, string> = {};
    let finished = false;
    let statusCode = 200;
    let payload = '';

    const finish = () => {
      if (finished) return;
      finished = true;
      const type = (outHeaders['content-type'] ?? '').split(';')[0]!.trim();
      let body: unknown = {};
      if (/json/.test(type) && payload) {
        try {
          body = JSON.parse(payload);
        } catch {
          body = payload;
        }
      }
      resolve({ status: statusCode, statusCode, headers: outHeaders, header: outHeaders, body, text: payload, type, ok: statusCode >= 200 && statusCode < 300 });
    };

    const res: Res = {
      get statusCode() { return statusCode; },
      set statusCode(c: number) { statusCode = c; },
      get headersSent() { return finished; },
      locals: {},
      status(code) {
        if (!Number.isInteger(code) || code < 100 || code > 999) throw new RangeError(`Invalid status code: ${code}`);
        statusCode = code;
        return res;
      },
      set(name, value) {
        if (typeof name === 'object') for (const [k, v] of Object.entries(name)) outHeaders[k.toLowerCase()] = String(v);
        else outHeaders[name.toLowerCase()] = String(value);
        return res;
      },
      header(name, value) { return res.set(name, value); },
      get: (name) => outHeaders[name.toLowerCase()],
      type(t) {
        res.set('Content-Type', t.includes('/') ? t : t === 'json' ? 'application/json' : t === 'html' ? 'text/html' : `text/${t}`);
        return res;
      },
      json(body) {
        if (finished) throw new Error('Cannot set headers after they are sent to the client');
        if (!outHeaders['content-type']) outHeaders['content-type'] = 'application/json; charset=utf-8';
        payload = body === undefined ? '' : JSON.stringify(body);
        finish();
        return res;
      },
      send(body) {
        if (finished) throw new Error('Cannot set headers after they are sent to the client');
        if (body !== null && typeof body === 'object') return res.json(body);
        if (body !== undefined && !outHeaders['content-type']) outHeaders['content-type'] = 'text/html; charset=utf-8';
        payload = body === undefined ? '' : String(body);
        finish();
        return res;
      },
      sendStatus(code) {
        res.status(code);
        outHeaders['content-type'] ??= 'text/plain; charset=utf-8';
        return res.send(STATUS_TEXT[code] ?? String(code));
      },
      end(body) {
        if (finished) return res;
        payload = body ?? '';
        finish();
        return res;
      },
      location(u) { return res.set('Location', u); },
      redirect(a, b) {
        const code = typeof a === 'number' ? a : 302;
        const target = typeof a === 'number' ? b! : a;
        res.status(code).set('Location', target);
        return res.end();
      },
      cookie(name, value, options = {}) {
        const parts = [`${name}=${encodeURIComponent(value)}`];
        if (options.maxAge !== undefined) parts.push(`Max-Age=${Math.floor(Number(options.maxAge) / 1000)}`);
        parts.push(`Path=${(options.path as string) ?? '/'}`);
        if (options.httpOnly) parts.push('HttpOnly');
        if (options.secure) parts.push('Secure');
        if (options.sameSite) parts.push(`SameSite=${String(options.sameSite)[0]!.toUpperCase()}${String(options.sameSite).slice(1).toLowerCase()}`);
        const prev = outHeaders['set-cookie'];
        outHeaders['set-cookie'] = prev ? `${prev}, ${parts.join('; ')}` : parts.join('; ');
        return res;
      },
      clearCookie(name, options = {}) {
        return res.cookie(name, '', { ...options, maxAge: 0 });
      },
    };

    const lowerHeaders = Object.fromEntries(Object.entries(headers).map(([k, v]) => [k.toLowerCase(), v]));
    const req = {
      method,
      url,
      originalUrl: url,
      baseUrl: '',
      path: path || '/',
      query: parseQuery(qs),
      params: {},
      headers: lowerHeaders,
      body: undefined,
      rawBody,
      app: app as App,
      get: (name: string) => lowerHeaders[name.toLowerCase()],
      header: (name: string) => lowerHeaders[name.toLowerCase()],
    } as Req;

    const done: Next = (err) => {
      if (finished) return;
      if (err !== undefined) {
        const e = err as { status?: number; statusCode?: number; message?: string };
        const code = e?.status ?? e?.statusCode ?? 500;
        statusCode = code >= 400 && code < 600 ? code : 500;
        outHeaders['content-type'] = 'text/html; charset=utf-8';
        payload = statusCode >= 500 ? 'Internal Server Error' : (e?.message ?? STATUS_TEXT[statusCode] ?? 'Error');
        finish();
        return;
      }
      statusCode = 404;
      outHeaders['content-type'] = 'text/html; charset=utf-8';
      payload = `Cannot ${method} ${path}`;
      finish();
    };

    try {
      if ('handle' in app && typeof app.handle === 'function') app.handle(req, res, done);
      else {
        const out = (app as Handler)(req, res, done);
        if (out && typeof (out as Promise<unknown>).then === 'function') (out as Promise<unknown>).then(undefined, done);
      }
    } catch (e) {
      done(e);
    }
    // Handlers that never respond would hang a real test runner too; fail clearly instead.
    setTimeout(() => {
      if (!finished) reject(new Error(`${method} ${path} never sent a response (did a handler forget to call res.json()/res.send() or next()?)`));
    }, 1500);
  });
}

class Test implements PromiseLike<TestResponse> {
  private headers: Record<string, string> = {};
  private rawBody: string | undefined;
  private expectations: ((res: TestResponse) => void)[] = [];
  private queryString = '';

  constructor(private app: App | Handler, private method: string, private url: string) {}

  set(name: string | Record<string, string>, value?: string): this {
    if (typeof name === 'object') Object.assign(this.headers, name);
    else this.headers[name] = String(value);
    return this;
  }

  type(t: string): this {
    return this.set('Content-Type', t === 'json' ? 'application/json' : t === 'form' ? 'application/x-www-form-urlencoded' : t);
  }

  query(q: Record<string, unknown> | string): this {
    const qs = typeof q === 'string' ? q : new URLSearchParams(Object.entries(q).map(([k, v]) => [k, String(v)])).toString();
    this.queryString += (this.queryString ? '&' : '') + qs;
    return this;
  }

  send(body: unknown): this {
    if (typeof body === 'string') {
      this.rawBody = body;
      if (!Object.keys(this.headers).some((h) => h.toLowerCase() === 'content-type')) this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    } else {
      this.rawBody = JSON.stringify(body);
      if (!Object.keys(this.headers).some((h) => h.toLowerCase() === 'content-type')) this.headers['Content-Type'] = 'application/json';
    }
    return this;
  }

  expect(a: number | string | ((res: TestResponse) => void), b?: unknown): this {
    if (typeof a === 'function') this.expectations.push(a);
    else if (typeof a === 'number') {
      this.expectations.push((res) => {
        if (res.status !== a) throw new Error(`expected ${a} "${STATUS_TEXT[a] ?? ''}", got ${res.status} "${STATUS_TEXT[res.status] ?? ''}"`);
      });
      if (b !== undefined) this.expectations.push((res) => {
        const ok = typeof b === 'string' ? res.text === b : JSON.stringify(res.body) === JSON.stringify(b);
        if (!ok) throw new Error(`expected body ${JSON.stringify(b)}, got ${res.text}`);
      });
    } else {
      this.expectations.push((res) => {
        const actual = res.headers[a.toLowerCase()];
        const ok = b instanceof RegExp ? b.test(actual ?? '') : actual === b;
        if (!ok) throw new Error(`expected "${a}" matching ${String(b)}, got "${actual}"`);
      });
    }
    return this;
  }

  then<T1 = TestResponse, T2 = never>(onFulfilled?: ((v: TestResponse) => T1 | PromiseLike<T1>) | null, onRejected?: ((e: unknown) => T2 | PromiseLike<T2>) | null): Promise<T1 | T2> {
    const url = this.queryString ? `${this.url}${this.url.includes('?') ? '&' : '?'}${this.queryString}` : this.url;
    return handleRequest(this.app, this.method, url, this.headers, this.rawBody)
      .then((res) => {
        for (const check of this.expectations) check(res);
        return res;
      })
      .then(onFulfilled, onRejected);
  }
}

/** Supertest-compatible: `await request(app).post('/todos').send({ title: 'Milk' }).expect(201)`. */
export function request(app: App | Handler) {
  const make = (method: string) => (url: string) => new Test(app, method, url);
  return { get: make('GET'), post: make('POST'), put: make('PUT'), patch: make('PATCH'), delete: make('DELETE'), head: make('HEAD'), options: make('OPTIONS') };
}
