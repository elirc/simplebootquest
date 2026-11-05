function createLogger({ level = 'info', now = () => new Date().toISOString(), write, base = {} }) {
  const log = (lvl) => (msg, fields = {}) => write(JSON.stringify({ msg, ...fields }));
  return { debug: log('debug'), info: log('info'), warn: log('warn'), error: log('error'), child: () => null };
}
