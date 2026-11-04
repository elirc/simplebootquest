function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

class RawHtml {
  constructor(value) {
    this.value = value;
  }
}

function raw(str) {
  return new RawHtml(str);
}

function render(value) {
  if (value === null || value === undefined || value === false) return '';
  if (value instanceof RawHtml) return value.value;
  if (Array.isArray(value)) return value.map(render).join('');
  return escapeHtml(value);
}

function html(strings, ...values) {
  return raw(strings.reduce((out, str, i) => out + str + (i < values.length ? render(values[i]) : ''), ''));
}
