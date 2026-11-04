function mergeSettings(defaults, overrides) {
  const defined = Object.fromEntries(Object.entries(overrides).filter(([, v]) => v !== undefined));
  return { ...defaults, ...defined };
}

function withoutPassword(user) {
  const { password, ...rest } = user;
  return rest;
}

function toPair({ key, value }) {
  return [key, value];
}
