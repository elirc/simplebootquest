function ok(res, data, meta) {
  return res.status(200).json(meta === undefined ? { data } : { data, meta });
}

function created(res, data, location) {
  if (location) res.set('Location', location);
  return res.status(201).json({ data });
}

function noContent(res) {
  return res.status(204).end();
}

function fail(res, status, code, message, details) {
  const error = details === undefined ? { code, message } : { code, message, details };
  return res.status(status).json({ error });
}

function paginated(res, items, { page, limit, total }) {
  return ok(res, items, { page, limit, total, totalPages: Math.ceil(total / limit) });
}
