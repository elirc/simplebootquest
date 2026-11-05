function formatBytes(n) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  let value = n;
  while (value >= 1024 && i < units.length - 1) {
    value /= 1024;
    i++;
  }
  const text = i === 0 ? String(value) : String(Math.round(value * 10) / 10);
  return `${text} ${units[i]}`;
}
