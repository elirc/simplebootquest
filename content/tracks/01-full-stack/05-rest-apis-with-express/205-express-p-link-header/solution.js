function buildLinks(baseUrl, { page, limit, total }) {
  const lastPage = Math.max(1, Math.ceil(total / limit));
  const sep = baseUrl.includes('?') ? '&' : '?';
  const url = (p) => `<${baseUrl}${sep}page=${p}&limit=${limit}>`;
  const links = [`${url(1)}; rel="first"`];
  if (page > 1) links.push(`${url(page - 1)}; rel="prev"`);
  if (page < lastPage) links.push(`${url(page + 1)}; rel="next"`);
  links.push(`${url(lastPage)}; rel="last"`);
  return links.join(', ');
}
