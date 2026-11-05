interface ServerOptions { port?: number; host?: string; cors?: boolean }

export function resolveOptions(options?: ServerOptions): Required<ServerOptions> {
  return { port: options?.port || 3000, host: options?.host || 'localhost', cors: options?.cors || false };
}
