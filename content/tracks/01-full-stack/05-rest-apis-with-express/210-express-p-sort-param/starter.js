function parseSort(param, allowed, fallback) {
  return param.split(',').map((field) => ({ field, direction: 'asc' }));
}
