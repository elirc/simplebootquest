const TYPES = {
  html: 'text/html', css: 'text/css', js: 'text/javascript', mjs: 'text/javascript', json: 'application/json',
  svg: 'image/svg+xml', png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', txt: 'text/plain', woff2: 'font/woff2',
};

function contentTypeFor(filename) {
  const base = filename.split('/').pop() ?? '';
  const dot = base.lastIndexOf('.');
  if (dot <= 0) return 'application/octet-stream';
  const type = TYPES[base.slice(dot + 1).toLowerCase()];
  if (!type) return 'application/octet-stream';
  return type.startsWith('text/') || type === 'application/json' ? `${type}; charset=utf-8` : type;
}
