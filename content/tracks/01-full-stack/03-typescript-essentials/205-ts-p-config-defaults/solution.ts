interface ServerOptions { port?: number; host?: string; cors?: boolean }

const DEFAULTS: Required<ServerOptions> = { port: 3000, host: 'localhost', cors: false };

export function resolveOptions(options: ServerOptions = {}): Required<ServerOptions> {
  const resolved = {
    port: options.port ?? DEFAULTS.port,
    host: options.host ?? DEFAULTS.host,
    cors: options.cors ?? DEFAULTS.cors,
  };
  if (resolved.port < 0 || resolved.port > 65535) throw new RangeError('port out of range');
  return resolved;
}
