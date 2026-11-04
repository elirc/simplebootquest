function contactList(users) {
  return users.map(({ name, email }) => `${name} <${email}>`);
}

function numbered(items) {
  const out = [];
  for (const [i, item] of items.entries()) out.push(`${i + 1}. ${item}`);
  return out;
}

function buildUrl({ host = 'localhost', port = 3000, path = '/', secure = false } = {}) {
  return `${secure ? 'https' : 'http'}://${host}:${port}${path}`;
}
