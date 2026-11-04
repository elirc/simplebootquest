function displayName(user) {
  return user?.nickname || user?.name || 'Anonymous';
}

function pageSize(options) {
  return options?.pageSize ?? 20;
}

function cityOf(user) {
  return user?.address?.city?.toUpperCase() ?? 'UNKNOWN';
}
