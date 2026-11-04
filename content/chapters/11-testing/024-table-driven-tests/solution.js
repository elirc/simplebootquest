function slugify(s) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function formatName(template, args, index) {
  if (!Array.isArray(args)) {
    return template.replace(/\$(\w+)/g, (_, key) => String(args[key])).replace(/%#/g, String(index));
  }
  let i = 0;
  return template.replace(/%[sij#]/g, (token) => {
    if (token === '%#') return String(index);
    const value = args[i++];
    if (token === '%i') return String(Math.trunc(value));
    if (token === '%j') return JSON.stringify(value);
    return String(value);
  });
}

function each(cases, register = test) {
  return (nameTemplate, fn) => {
    cases.forEach((args, index) => {
      register(formatName(nameTemplate, args, index), () => (Array.isArray(args) ? fn(...args) : fn(args)));
    });
  };
}

const slugifyCases = [
  ['Hello World', 'hello-world'],
  ['  Trim me  ', 'trim-me'],
  ['C++ & Rust!', 'c-rust'],
  ['---', ''],
];

each(slugifyCases)('slugify(%j) = %j', (input, expected) => {
  expect(slugify(input)).toBe(expected);
});
