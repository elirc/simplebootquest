export function createLogger(options: any) {
  const log = (level: string) => (msg: string, context: object = {}) => options.write(JSON.stringify({ level, msg, ...context }));
  return { debug: log('debug'), info: log('info'), warn: log('warn'), error: log('error'), child: () => ({}) };
}
