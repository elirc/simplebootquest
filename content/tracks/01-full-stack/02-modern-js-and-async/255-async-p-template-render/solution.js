function renderTemplate(template, data) {
  return template.replace(/{{\s*([\w.]+)\s*(?:\|\s*(upper|default:"([^"]*)"))?\s*}}/g, (_, path, filter, fallback) => {
    let value = path.split('.').reduce((obj, key) => (obj == null ? undefined : obj[key]), data);
    if ((value === undefined || value === null || value === '') && fallback !== undefined) value = fallback;
    if (value === undefined || value === null) return '';
    const text = String(value);
    return filter === 'upper' ? text.toUpperCase() : text;
  });
}
