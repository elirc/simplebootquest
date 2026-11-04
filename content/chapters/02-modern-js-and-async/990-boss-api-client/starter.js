class ApiError extends Error {
  // TODO
}

function createApiClient(baseUrl, fetchFn) {
  async function request(method, path, body) {
    // TODO
  }

  return {
    list(resource) {},
    get(resource, id) {},
    create(resource, data) {},
    update(resource, id, data) {},
    remove(resource, id) {},
  };
}
