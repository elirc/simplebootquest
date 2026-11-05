const LEVELS = ['debug', 'info', 'warn', 'error'];

function createLogger({ level = 'info', now = () => new Date().toISOString(), write, base = {} }) {
  const min = LEVELS.indexOf(level);
  const log = (lvl) => (msg, fields = {}) => {
    if (LEVELS.indexOf(lvl) < min) return;
    const extra = { ...fields };
    if (extra.err instanceof Error) extra.err = { name: extra.err.name, message: extra.err.message, stack: extra.err.stack };
    write(JSON.stringify({ time: now(), level: lvl, msg, ...base, ...extra }));
  };
  return {
    debug: log('debug'),
    info: log('info'),
    warn: log('warn'),
    error: log('error'),
    child: (fields) => createLogger({ level, now, write, base: { ...base, ...fields } }),
  };
}
