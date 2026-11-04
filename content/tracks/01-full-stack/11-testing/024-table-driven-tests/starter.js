function slugify(s) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function each(cases, register = test) {
  return (nameTemplate, fn) => {};
}

// Cover at least these:
// 'Hello World' → 'hello-world'
// '  Trim me  ' → 'trim-me'
// 'C++ & Rust!' → 'c-rust'
// '---' → ''
const slugifyCases = [];
