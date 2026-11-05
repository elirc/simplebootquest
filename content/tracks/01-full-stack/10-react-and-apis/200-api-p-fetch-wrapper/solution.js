class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

function createApi(fetchImpl, baseUrl) {
  return async (path, { method = 'GET', body } = {}) => {
    const headers = { Accept: 'application/json' };
    const init = { method, credentials: 'include', headers };
    if (body !== undefined) {
      headers['Content-Type'] = 'application/json';
      init.body = JSON.stringify(body);
    }
    let res;
    try {
      res = await fetchImpl(baseUrl + path, init);
    } catch {
      throw new ApiError(0, 'Network error');
    }
    if (res.status === 204) return null;
    if (res.ok) return res.json();
    let message = res.statusText;
    try {
      const json = await res.json();
      if (json && typeof json.error === 'object' && json.error && json.error.message) message = json.error.message;
      else if (json && typeof json.error === 'string') message = json.error;
    } catch {
      // not JSON
    }
    throw new ApiError(res.status, message);
  };
}
