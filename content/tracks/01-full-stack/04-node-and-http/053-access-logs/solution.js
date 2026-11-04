const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const pad = (n) => String(n).padStart(2, '0');

function commonLog({ ip, user, time, method, path, status, bytes }) {
  const t = `${pad(time.getUTCDate())}/${MONTHS[time.getUTCMonth()]}/${time.getUTCFullYear()}:${pad(time.getUTCHours())}:${pad(time.getUTCMinutes())}:${pad(time.getUTCSeconds())} +0000`;
  return `${ip} - ${user ?? '-'} [${t}] "${method} ${path} HTTP/1.1" ${status} ${bytes ?? '-'}`;
}

function jsonLog(entry) {
  return JSON.stringify({ time: entry.time.toISOString(), method: entry.method, path: entry.path, status: entry.status, ms: entry.ms });
}

function parseCommonLog(line) {
  const m = /^(\S+) - (\S+) \[[^\]]+\] "(\S+) (\S+) [^"]*" (\d{3}) (\S+)$/.exec(line);
  if (!m) return null;
  return {
    ip: m[1],
    user: m[2] === '-' ? null : m[2],
    method: m[3],
    path: m[4],
    status: Number(m[5]),
    bytes: m[6] === '-' ? null : Number(m[6]),
  };
}
