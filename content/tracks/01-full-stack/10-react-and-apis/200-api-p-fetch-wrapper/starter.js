class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

function createApi(fetchImpl, baseUrl) {
  return async (path, { method = 'GET', body } = {}) => {
    const res = await fetchImpl(baseUrl + path, { method, body });
    return res.json();
  };
}
