function testRequest(handler) {
  return async (method, path, { body, headers = {} } = {}) => {
    const res = { statusCode: 200, json(b) { this.body = b; } };
    handler({ method, path, body, headers }, res);
    return { status: res.statusCode, headers: {}, body: res.body };
  };
}
