function toJson(obj) {
  return JSON.stringify(obj, null, 2);
}

function parseOr(text, fallback) {
  try {
    return JSON.parse(text);
  } catch {
    return fallback;
  }
}

function roundTrip(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function serializeUser(user) {
  return JSON.stringify(user, ['id', 'name', 'createdAt']);
}
