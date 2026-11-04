function mockRes() {
  const res = { statusCode: 200, headers: {}, body: undefined, ended: false };
  res.status = (c) => { res.statusCode = c; return res; };
  res.set = (k, v) => { res.headers[k] = v; return res; };
  res.json = (b) => { res.body = b; res.ended = true; return res; };
  res.end = () => { res.ended = true; return res; };
  return res;
}

function created(res, basePath, resource) {
  return res.status(201).set('Location', `${basePath}/${resource.id}`).json(resource);
}

function noContent(res) {
  return res.status(204).end();
}

function paginationLinks(basePath, { page, pageSize, total }) {
  const lastPage = Math.max(1, Math.ceil(total / pageSize));
  const link = (p, rel) => `<${basePath}?page=${p}&pageSize=${pageSize}>; rel="${rel}"`;
  const links = [link(1, 'first')];
  if (page > 1) links.push(link(page - 1, 'prev'));
  if (page < lastPage) links.push(link(page + 1, 'next'));
  links.push(link(lastPage, 'last'));
  return links.join(', ');
}
