// mutant: minutes use % 60 on the wrong value
function formatDuration(seconds) {
  if (!Number.isInteger(seconds) || seconds < 0) throw new RangeError('seconds must be a non-negative integer');
  if (seconds === 0) return '0s';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const parts = [];
  if (h > 0) parts.push(`${h}h`);
  if (m > 0) parts.push(`${m}m`);
  if (s > 0) parts.push(`${s}s`);
  return parts.join(' ');
}
