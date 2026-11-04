function makeUser(name, email) {
  return { name, email, createdAt: 'now' };
}

function setField(obj, key, value) {
  return { ...obj, [key]: value };
}

function toggleFlag(flags, key) {
  return { ...flags, [key]: !flags[key] };
}

function fromPairs(pairs) {
  let out = {};
  for (const [key, value] of pairs) out = { ...out, [key]: value };
  return out;
}
