function etagFor(body) {}

function conditionalResponse(req, body, cacheControl) {
  return { status: 200, headers: {}, body };
}
