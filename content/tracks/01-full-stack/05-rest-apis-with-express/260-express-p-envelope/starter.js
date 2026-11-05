function ok(res, data, meta) { res.json(data); }
function created(res, data, location) { res.json(data); }
function noContent(res) { res.end(); }
function fail(res, status, code, message, details) { res.status(status).json({ message }); }
function paginated(res, items, { page, limit, total }) { res.json(items); }
