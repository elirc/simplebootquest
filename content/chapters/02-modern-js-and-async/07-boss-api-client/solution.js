class ApiError extends Error {
  constructor(message, status, body) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.body = body;
  }
}

function createApiClient(baseUrl, fetchFn) {
  async function request(method, path, body) {
    const url = `${baseUrl}${path}`;
    const options = { method };
    if (body !== undefined) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(body);
    }
    const attempts = method === 'GET' ? 3 : 1;
    let res;
    for (let attempt = 1; attempt <= attempts; attempt++) {
      res = await fetchFn(url, options);
      if (res.ok || res.status < 500) break;
    }
    if (!res.ok) {
      let errorBody = null;
      try {
        errorBody = await res.json();
      } catch {
        errorBody = null;
      }
      throw new ApiError(`${method} ${url} failed with ${res.status}`, res.status, errorBody);
    }
    if (res.status === 204) return null;
    return res.json();
  }

  return {
    list: (resource) => request('GET', `/${resource}`),
    get: (resource, id) => request('GET', `/${resource}/${id}`),
    create: (resource, data) => request('POST', `/${resource}`, data),
    update: (resource, id, data) => request('PATCH', `/${resource}/${id}`, data),
    remove: (resource, id) => request('DELETE', `/${resource}/${id}`),
  };
}
